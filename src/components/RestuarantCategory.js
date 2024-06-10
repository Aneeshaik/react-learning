const RestuarantCategory = ({data}) => {
    // console.log(data);
    return(
        <div className="">
            {/* header */}
            <div className="">
                <span className="font-bold">{data?.title}</span>
                <span className="">⬇️</span>
            </div>
        </div>
    )
}
export default RestuarantCategory;