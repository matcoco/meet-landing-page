const Button = ({ text, version, cln}) => {
    
    return (
        <button type="button" className={`${cln} btn`}>
            {`${text} `}
            { version && <span className="version">{version}</span> }
        </button>
    )
}

export default Button