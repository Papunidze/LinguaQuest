const CardSkelleton = () => {
  return (
    <div className="rounded-lg w-96 animate-pulse p-2 ">
      <div className="space-y-3">
        <div className="h-48 rounded-lg bg-gray-400" />
        <div className="h-3 w-11/12 rounded-lg bg-gray-400" />
        <div className="h-3 w-8/12 rounded-lg bg-gray-400" />
        <div className="h-3 w-7/12 rounded-lg bg-gray-400" />
      </div>
    </div>
  );
};

export default CardSkelleton;
