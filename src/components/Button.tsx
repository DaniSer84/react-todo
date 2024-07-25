type ButtonProps = {
    isActive: boolean,
    action: string,
    handleClick: (e: React.FormEvent<HTMLFormElement> | any) => void,
    type: string
}

export default function Button({ action, handleClick, isActive}: ButtonProps) {

    return (
        <button 
            onClick={handleClick} 
            className={isActive ? 'active' : ''}>
            {action}
        </button>
    )

}