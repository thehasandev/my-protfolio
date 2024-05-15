

function Image({className,src,alt}) {
  return (
    <img className={`w-full ${className}`} src={src} alt={alt} />
  )
}

export default Image