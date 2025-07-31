const Bot = (props) => {
    return (
        <span {...props} className="bg-[#ffffff23] rounded-[5px] p-[5px_10px] cursor-pointer">
            {props.children}
        </span> 
    )
}

export default Bot