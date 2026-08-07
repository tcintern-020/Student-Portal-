export default function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
