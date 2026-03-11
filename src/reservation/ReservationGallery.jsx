export default function ReservationGallery() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
        alt="Restaurant interior"
        className="h-52 w-full rounded-3xl object-cover shadow-lg"
      />
      <img
        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
        alt="Chef plating food"
        className="h-52 w-full rounded-3xl object-cover shadow-lg"
      />
      <img
        src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
        alt="Food served"
        className="h-52 w-full rounded-3xl object-cover shadow-lg"
      />
    </div>
  );
}