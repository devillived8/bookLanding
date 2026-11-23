import type { ReactNode } from "react"
import Title from "../title/Title";

interface ISectionProps extends React.ComponentProps<'section'> {
    children: ReactNode;
    titleText: string;
}

const Section = ({children, titleText, className, ...props}: ISectionProps) => {
  return (
    <section className={`rounded-md mt-4 mr-4 ml-4 p-4 border border-border-main bg-bg-main ${className}`} {...props}>
        <div><Title level={2} className="text-center pb-4">{titleText}</Title></div>
        {children}
    </section>
  )
}

export default Section