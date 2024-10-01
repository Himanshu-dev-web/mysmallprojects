import React from 'react';

const Page = () => {
  const projects = [
    {
      id: 1,
      name: 'Project Name 1',
      description:
        'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/4ec80416e9cb2ea73857f4b8dd9a7c69aa97fc2805c0f65291ed582c828ed52c?apiKey=45441a0d94114ac98b0f24c88cdc4f23&width=800',
    },
    {
      id: 2,
      name: 'Project Name 2',
      description:
        'What was your  role, your deliverables, if the project was personal, freelancing.',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/9cc3b0ecfa06d9672ac38590d011540f2e2a16b221ed1f9d289e17cce2dfb5f9?apiKey=45441a0d94114ac98b0f24c88cdc4f23&width=800',
    },
    {
      id: 3,
      name: 'Project Name 3',
      description:
        'You can also add in this description the type of the project, if it was for web, mobile, electron.',
      imageUrl:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/f4f030546e046d3fc4341f22ca83274555f4fd9efb70a1f7999f55d6b9829f3d?apiKey=45441a0d94114ac98b0f24c88cdc4f23&width=800',
    },
  ];

  return (
    <div className="max-w-[992px] mx-auto mt-4">
     <header className="text-zinc-800 text-center text-5xl font-bold leading-[72px] max-md:text-4xl">
        Projects
      </header>
      {projects.map((project) => (
        <div
          key={project.id}
          className="shadow-2xl w-full mt-20 p-6 rounded-3xl max-md:max-w-full max-md:mt-10"
        >
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src={project.imageUrl}
                className="aspect-[0.94] rounded-[.8rem] object-contain object-center w-full overflow-hidden grow  max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col items-stretch w-8/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch bg-white flex grow flex-col w-full pl-12 pr-10 py-12 max-md:max-w-full max-md:px-5">
                <div className="text-zinc-800 text-4xl font-bold leading-[60px] whitespace-nowrap mt-28 max-md:mt-10">
                  {project.name}
                </div>
                <div className="text-zinc-500 text-lg leading-7 mt-6">
                  {project.description}
                </div>
                <div className="text-zinc-800 text-lg font-medium leading-7 whitespace-nowrap items-stretch border border-[color:var(--font-high-emphasis,#25282B)] justify-center mt-6 px-6 py-2 rounded-3xl border-solid self-start max-md:px-5">
                  View Project
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
