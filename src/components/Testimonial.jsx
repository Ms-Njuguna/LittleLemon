export default function Testimonial({ firstName, userName, review, profile }) {
    return (
        <div className="bg-[#EDEFEE] text-black p-4 rounded-xl">
            <div className="flex gap-1 mb-2">★★★★★</div>
            <div className="flex items-center gap-3 mb-3">
                <img src={profile} className="w-10 h-10 rounded-full" />
                <div>
                    <p className="font-bold text-sm">{firstName}</p>
                    <p className="text-xs text-gray-500">{userName}</p>
                </div>
            </div>
            <p className="text-sm">{review}</p>
        </div>
    )
}