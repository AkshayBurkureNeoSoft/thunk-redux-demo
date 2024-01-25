import React, { useEffect } from "react";
import { useForm, Resolver, SubmitHandler } from "react-hook-form"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../_redux/slice/postsSlice";

const AddPostComp = () => {
    const dispatch = useDispatch();
    const { editPostData } = useSelector((state: any) => state.posts);

    const { register,setValue, handleSubmit,reset, formState: { errors } } = useForm<AddPostFormValue>()

    const onSubmit: SubmitHandler<AddPostFormValue> = (data) =>{
       if(editPostData?.id){
        dispatch(updatePost({...data,id:editPostData?.id}));
       }else{
        dispatch(addPost({...data,id:Math.floor(Math.random() * 1000) + 1}));
       }
        reset();
    }

    useEffect(()=>{
        setValue('title',editPostData?.title);
        setValue('body',editPostData?.body);
    },[editPostData])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title",{
                    required:"Please Add Title"
                })} placeholder="title" />
                {errors?.title && <p>{errors.title.message}</p>}

                <input {...register("body")} placeholder="body" />
                {errors?.body && <p>{errors.body.message}</p>}

                <input type="submit" />
            </form>
        </>
    )
}

export default AddPostComp;