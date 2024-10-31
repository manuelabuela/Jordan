// eslint-disable-next-line react/prop-types
export default function Cards({image, title, description, price}){
    return(
        <div className=" w-[384px] space-y-2 rounded pb-6">
            <img src={image} className=" hover:scale-90 ease-in-out duration-300"/>
            <h3 className=" font-medium text-base px-3">{title}</h3>
            <p className=" text-lg px-3 text-[#7CA2F4]">{description}</p>
            <p className=" px-3 py-4 font-semibold">{price}</p>
        </div>
    )
}