<template>
    <div class="uploadFiles" v-show="isShow">
        <table>
            <thead>
                <tr>
                    <th> 名称 </th>
                    <th width="20%"> 状态 </th>
                    <!--<th> 操作 </th>-->
                </tr>
            </thead>
            <tbody>
                <tr v-for='file in files'>
                    <td v-text='file.name'></td>
                    <td v-text='onStatus(file)'></td>
                    <!--<td><button type='button' @click="uploadItem(file)"> 上传 </button></td>-->
                </tr>
            </tbody>
        </table>
        <h5 class="font16">{{errorText}}</h5>
        <div class="bottom">
            <vue-file-upload :url='uploadUrl' v-bind:files.sync='files' v-bind:filters="filters" v-bind:events='cbEvents' v-bind:request-options="reqopts"></vue-file-upload>
            <a class="uploadImages" @click="uploadAll">上传文件</a>
            <a class="cancel" @click="isShow=false">取消</a>
        </div>
    </div>
</template>

<script>
var VueFileUpload = require('vue-file-upload');
export default {
    props:['back','isShow','errorText'],
    data(){
        return{
            uploadUrl:configPath.uploadImageUrl,
            files:[],
            //文件过滤器，只能上传图片
            filters:[
                {
                name:"imageFilter",
                fn(file){
                    if(file.size/1024>200){
                        // this.errorText="图片过大，请不要超过200k"
                        alert("图片过大，请不要超过200k")
                        return false;
                    }
                    var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                    return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                    }
                }
            ],
            //回调函数绑定
            cbEvents:{
                onCompleteUpload:(file,response,status,header)=>{
                    this.back(response)
                }
            },
            //xhr请求附带参数
            reqopts:{
                formData:{
                tokens:'tttttttttttttt'
                },
                responseType:'json',
                withCredentials:false
            }
        }
    },
    methods:{
        onStatus(file){
        if(file.isSuccess){
            return "上传成功";
        }else if(file.isError){
            return "上传失败";
        }else if(file.isUploading){
            return "正在上传";
        }else{
            return "待上传";
        }
        },
        uploadItem(file){
        //单个文件上传
        file.upload();
        },
        uploadAll(){
        //上传所有文件
        // this.$broadcast('DO_POST_FILE');
        }
    },
    components:{
        VueFileUpload
    }
}

</script>
