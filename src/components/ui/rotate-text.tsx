export default function RotateText({ title }: { title: string }) {
  return (
    <div
      className="text-[150px] relative after:absolute after:content-[''] after:w-1 after:h-2/3 after:bg-secondary after:rounded-full after:right-full after:bottom-0 after:-translate-x-1/2 flex text-end"
      style={{
        textOrientation: 'mixed',
        writingMode: 'vertical-rl',
        wordBreak: 'break-word',
        maxHeight: '100%',
      }}
    >
      <span
        style={{
          WebkitTextStroke: '1px white',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {title}
      </span>
    </div>
  );
}
