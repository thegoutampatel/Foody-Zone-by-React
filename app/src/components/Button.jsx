function Button({text, onClick}) {
  return (
    <div>
        <button onClick={onClick} className="bg-[#FF4343] px-2 py-1 rounded-md text-white text-[8px] lg:text-[16px]">{text}</button>
    </div>
  )
}

export default Button