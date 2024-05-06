'use client';
import { getImagePath } from '@/utils';
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image';
import { useState } from 'react';
import { TbPhotoPlus } from 'react-icons/tb'

export const ImageUpload = ({ image }: { image: string | undefined }) => {
    const [imageUrl, setImageUrl] = useState('');

    return (
        <CldUploadWidget
            onSuccess={(result, { widget }) => {
                if (result.event === 'success') {
                    widget.close();
                    //@ts-ignore
                    setImageUrl(result.info.secure_url);
                }
            }}
            uploadPreset='mikhuy'
            options={{
                maxFiles: 1,
            }}
        >
            {({ open }) => (
                <>
                    <div className='space-y-2'>
                        <label className='text-slate-800'>Imagen Producto</label>
                        <div
                            className='relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100'
                            onClick={() => open()}
                        >
                            <TbPhotoPlus
                                size={50}
                            />
                            <p className='text-lg font-semibold'>Agregar Imagen</p>

                            {imageUrl && (
                                <div className='absolute inset-0 w-full h-full'>
                                    <Image
                                        fill
                                        src={imageUrl}
                                        alt="Product Image"
                                        className='object-contain'
                                    />
                                </div>
                            )}
                        </div>

                        {image && !imageUrl && (
                            <div>
                                <label>Imagen Actual:</label>
                                <div className='relative size-64 mx-auto'>
                                    <Image
                                        fill
                                        src={getImagePath(image)}
                                        alt='Actual Product Image'
                                        className='object-contain'
                                    />
                                </div>
                            </div>
                        )}

                        <input
                            type="hidden"
                            name='image'
                            defaultValue={imageUrl ? imageUrl : image}
                        />
                    </div>
                </>
            )}
        </CldUploadWidget>
    )
}
