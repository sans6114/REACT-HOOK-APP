export const Wrapper = ({ children, className }) => {
    return (

        <div className={`flex flex-col md:flex-row items-center md:h-[500px] justify-center gap-x-2 bg-gray-400 p-4 rounded-3xl m-4 ${className}`}>
            {children}
        </div>
    )
}