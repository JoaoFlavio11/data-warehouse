interface CardStatsProps {
  title: string;
  value: string | number;
}

export default function CardStats({
  title,
  value,
}: CardStatsProps){
  return(
    <div className="bg-white p-6 rouded-xl shadow">
      <h2 className="text-slate-700 text-sm">{title}</h2>
      <p className="text-slate-600 text-3xl font-bold">{value}</p>
    </div>
  );
}