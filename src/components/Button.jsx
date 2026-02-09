export default function Button({ label, className = "" }){
    return (
        <button className={`border px-3 py-2 rounded-2xl ${className}`}>{label}</button>
    )
}