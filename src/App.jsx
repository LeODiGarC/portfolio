import Section from "@/components/Section";
import StackCard from "@/components/StackCard";
import Stack from "@/components/Stack";
import ProjectCard from "./components/ProjectCard";
import ProjectIcons from "./components/ProjectIcons";
import { Link } from "lucide-react";

function App() {
  return (
    <>
      <Section id="home">
        <div className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hola!!👋
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Soy Leonardo Díaz
          </h2>
          <p className="capitalize text-lg md:text-xl lg:text-2xl font-bold bg-linear-to-r from-blue-900 via-blue-700 to-blue-300 dark:from-blue-700 dark:via-blue-500 dark:to-blue-300 bg-clip-text text-transparent bg-size-[200%_200%] animate-gradient transition-all duration-300 ease-in-out">
            Desarrollador de Software FullStack
          </p>
          <p className="text-base md:text-lg mb-5">
            Enfocado en crear soluciones eficientes, seguras y fáciles de
            mantener.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-15">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-7">
              <a href="https://github.com/LeODiGarC" target="_blank">
                <svg className="w-10 h-10">
                  <use href="/sprites.svg#icon-github" />
                </svg>
              </a>
              <a href="" target="_blank">
                <svg className="w-10 h-10">
                  <use href="/sprites.svg#icon-linkedin" />
                </svg>
              </a>
              <a href="mailto:leonardodg2000@gmail.com" target="_blank">
                <svg className="w-10 h-10">
                  <use href="/sprites.svg#icon-gmail" />
                </svg>
              </a>
            </div>
            <a
              href="/CV-Leonardo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center px-8 py-3 bg-background/60 rounded-xl hover:bg-background/80 transition-all">
              <p className="font-bold">Ver CV</p>
              <Link className="size-4" />
            </a>
          </div>
        </div>

        <svg className="order-first md:order-last w-40 md:w-60 lg:w-80 h-auto mt-10 md:mt-0 text-blue-700 dark:text-blue-500 rotate-10 animate-bounce transition-all duration-300 ease-in-out">
          <use href="/sprites.svg#code" />
        </svg>
      </Section>
      <Section id="about" reverseBG>
        <div className="flex flex-col gap-10 w-full md:1/3 lg:w-1/2">
          <h1 className="capitalize text-4xl md:text-5xl lg:text-6xl font-bold">
            Sobre mí
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            Soy graduado de <strong>Ingeniería en Ciencias Informáticas</strong>
            y actualmente ejerciendo como
            <strong> Desarrollador de Software FullStack</strong>.
          </p>
          <p className="text-md md:text-xl lg:text-2xl">
            Soy un desarrollador <strong>altamente motivado</strong> y orientado
            a los detalles,
            <strong> comprometido</strong> con estar al tanto de las últimas
            tendencias y mejores prácticas de la industria. Busco constantemente
            nuevos desafíos y oportunidades para
            <strong> expandir mis habilidades</strong>.
          </p>
        </div>
        <img
          src="/Profile.jpeg"
          alt="Avatar"
          title="Profile"
          description="Foto de perfil de Leonardo Díaz"
          className="w-80 md:w-120 order-first md:order-last rounded-full overflow-hidden shadow-2xl"
        />
      </Section>
      <Section id="stack">
        <div className="flex flex-col gap-8 w-full xl:px-25">
          <h2 className="capitalize text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Tecnologías que domino
          </h2>
          <div className="flex flex-col max-w-fit rounded-2xl bg-background/60">
            <StackCard name="Frontend">
              <Stack name="HTML" icon="html" />
              <Stack name="CSS" icon="css" />
              <Stack name="JavaScript" icon="javascript" />
              <Stack name="TypeScript" icon="typescript" />
              <Stack name="React" icon="react" />
              <Stack name="TailwindCSS" icon="tailwind" />
            </StackCard>
            <StackCard name="Backend">
              <Stack name="NodeJS" icon="nodejs" />
              <Stack name="Express" icon="express" />
              <Stack name="Prisma" icon="prisma" />
              <Stack name="MongoDB" icon="mongodb" />
              <Stack name="PostgreSQL" icon="postgresql" />
              <Stack name="MySQL" icon="mysql" />
            </StackCard>
            <StackCard name="Complementos">
              <Stack name="NextJS" icon="nextjs" />
              <Stack name="Figma" icon="figma" />
              <Stack name="Postman" icon="postman" />
              <Stack name="Docker" icon="docker" />
              <Stack name="Git" icon="git" />
              <Stack name="AWS (en proceso)" icon="aws" />
            </StackCard>
          </div>
        </div>
      </Section>
      <Section id="projects" reverseBG>
        <div className="flex flex-col gap-8 w-full xl:px-25">
          <h2 className="capitalize text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Proyectos
          </h2>
          <div className="flex flex-col max-w-fit rounded-2xl bg-background/60 p-8">
            <ProjectCard
              name="Bloom Essence"
              img="/bloom-essence.png"
              title="Bloom Essence"
              description="Proyecto de e-commerce de perfumes desarrollado con React. Cuenta con una interfaz atractiva y funcional, permitiendo a los usuarios explorar y comprar productos de manera sencilla."
              github="https://github.com/LeODiGarC/Perfumes-Web"
              url="https://bloom-essence.vercel.app/">
              <ProjectIcons icons={["html", "css", "javascript", "react"]} />
            </ProjectCard>
          </div>
        </div>
      </Section>
      <Section id="contact">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          voluptate, iure voluptatibus sapiente molestiae voluptatum, placeat
          culpa iusto fugiat aperiam laboriosam nulla. Rem, commodi veritatis
          qui asperiores eos numquam maxime!
        </p>
      </Section>
    </>
  );
}

export default App;
