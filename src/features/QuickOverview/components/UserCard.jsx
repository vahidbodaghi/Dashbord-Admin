const UserCard = ({ userName, lastName, email, profile }) => {
  return (
    <article className="flex h-20 rounded-md bg-gradient-to-b from-zinc-50/50  border p-4 items-center border-white bg-green-300/40 shadow hover:bg-gradient-to-t hover:from-neutral-100/70 hover:scale-101 gap-5 ">
      <div className="size-14 rounded-full overflow-hidden">
        <img src={profile} alt="Avatar" className="size-full object-cover" />
      </div>
      <div className="text-xs space-y-1">
        <p>
          کاربر
          <span className="inline-block text-green-500 px-1">
            <strong>{userName + lastName}</strong>
          </span>
          داخل وبسایت ثبت نام کرد
        </p>
        <p className="text-neutral-500/80">{email}</p>
      </div>
    </article>
  );
};

export default UserCard;
