
import Section from "./Section";

const Summary = () =>{
    return(
        <Section crosses>
              <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-green-500 rounded-3xl overflow-hidden">
                            <img src="/budha.png" className="h-full w-full object-cover" width={630} height={750} alt="menu" />
                        </div>
                        <div className="p-4 bg-white rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-8 mt-50">
                                <h4 className="text-[2rem] font-bold font-serif leading-normal mb-4 text-center">

At CHAIWAAI, every sip is a blend of joy, tradition and modernity.
</h4>
<h4 className="text-[2rem] font-bold font-serif leading-normal mb-4 text-center">Find meaningful connections and cherished moments in every cup!</h4>
                                <p className="body-2 mb-[2rem]"></p>
                            </div>
                        </div>
                    </div>
        </Section>
    )
}

export default Summary;

