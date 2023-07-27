

export default function Testimonials() {
  return (
    <section className="dark:bg-gray-900 mt-24">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">See what our beta customers have to say about Voxlab</p>
      </div> 
      <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-10">
          <figure className="flex flex-col rounded-3xl justify-center items-center p-8 text-center shadow-lg bg-gray-100 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Object Detection Accuracy improved</h3> */}
                  <p className="my-4">"Voxlab's collaboration with Imgai produced remarkable results in object detection. Using synthetic images of symbols and logos, the accuracy of detection models improved significantly."</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Bonnie Green</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead Developer at Imgai</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center rounded-3xl items-center p-8 text-center shadow-lg bg-gray-100 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3> */}
                  <p className="my-4">"Voxlab generated synthetic audio clips of person names, company names, places, etc. Which helped us improve our Personal Identity Information models accuracy.</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <img className="w-9 h-9 rounded-full" src="/privacy-ai.jpeg" alt="profile picture" />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Ali Sarabadani</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Founder at Privacy AI</div>
                  </div>
              </figcaption>    
          </figure>
      </div>
      </div>
</section>
  );
}
