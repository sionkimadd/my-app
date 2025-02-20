interface IntroductionProps {
  name: string;
  image: string;
  job: string;
  description: string;
}

const Introduction = ({ name, image, job, description }: IntroductionProps) => {
  return (
    <section id="introduction" className="p-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center gap-8 mx-auto">
          <div className="flex items-center gap-8">
            <img src={image} alt="Profile" className="h-24 w-24 shrink-0 rounded-full object-cover" />
            <div className="flex flex-col gap-2 text-left">
              <div className="text-lg font-bold">
                <h1>{name}</h1>
              </div>
              <div className="text-sm">
                <p>{job}</p>
              </div>
            </div>
          </div>
          <div className="text-base max-w-lg">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;