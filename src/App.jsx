import Section from "./components/Section";
import Profile from "@/assets/Profile.jpeg";

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
          <div className="flex justify-center md:justify-start items-center gap-7">
            <a href="" target="_blank">
              <svg className="w-10 h-10">
                <use href="/sprites.svg#icon-facebook" />
              </svg>
            </a>
            <a href="" target="_blank">
              <svg className="w-10 h-10">
                <use href="/sprites.svg#icon-x" />
              </svg>
            </a>
            <a href="" target="_blank">
              <svg className="w-10 h-10">
                <use href="/sprites.svg#icon-instagram" />
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
        </div>

        <svg className="order-first md:order-last w-40 md:w-60 lg:w-80 h-auto mt-10 md:mt-0 text-blue-700 dark:text-blue-500 rotate-10 animate-bounce transition-all duration-300 ease-in-out">
          <use href="/sprites.svg#code" />
        </svg>
      </Section>
      <Section id="about" reverseBG>
        <div className="flex flex-col gap-10 w-full md:w-1/2">
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
        <div className="w-50 md:w-auto order-first md:order-last rounded-full overflow-hidden shadow-2xl">
          <img src={Profile} alt="Avatar" />
        </div>
      </Section>
      <Section id="stack" className="justify-start">
          <div className="flex flex-col gap-8 md:ml-5 lg:ml-10 xl:ml-25 2xl:ml-50">
            <h2 className="capitalize text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Tecnologías que domino
            </h2>
            <div className="flex flex-col items-center text-center justify-start p-8 md:flex-row max-w-fit gap-8 rounded-2xl bg-background/60">
              <h3 className="text-2xl">Frontend</h3>
              <div className="flex flex-wrap gap-4 items-center justify-start bg-background/20 rounded-2xl">
                <div className="flex flex-col gap-2 items-center p-5">
                  <svg className="w-15 h-15">
                    <use href="/sprites.svg#icon-html" />
                  </svg>
                  <p>HTML</p>
                </div>
                <div className="flex flex-col gap-2 items-center p-5">
                  <svg className="w-15 h-15">
                    <use href="/sprites.svg#icon-css" />
                  </svg>
                  <p>CSS</p>
                </div>
                <div className="flex flex-col gap-2 items-center p-5">
                  <svg className="w-15 h-15">
                    <use href="/sprites.svg#icon-javascript" />
                  </svg>
                  <p>JavaScript</p>
                </div>
                <div className="flex flex-col gap-2 items-center p-5">
                  <svg className="w-15 h-15">
                    <use href="/sprites.svg#icon-typescript" />
                  </svg>
                  <p>TypeScript</p>
                </div>
                <div className="flex flex-col gap-2 items-center p-5">
                  <svg className="w-15 h-15">
                    <use href="/sprites.svg#icon-react" />
                  </svg>
                  <p>React</p>
                </div>
                <div className="flex flex-col gap-2 items-center p-5">
                  <svg className="w-15 h-15">
                    <use href="/sprites.svg#icon-tailwind" />
                  </svg>
                  <p>TailwindCSS</p>
                </div>
              </div>
            </div>
          </div>
      </Section>
      <Section id="projects" reverseBG>
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure
          rerum qui corporis velit ratione dignissimos maxime, consectetur iste.
          Saepe ea, alias ex itaque sit tenetur mollitia vel debitis sunt!
        </p>
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
