import T1Img from '../assets/t1img.jpg';
import T2Img from '../assets/t2img.png';
import T3Img from '../assets/t3img.png';
import T4Img from '../assets/t4img.png';


export default function Testimonial() {
  return (
    <div className='flex bg-blue-600 m-20 ssm:flex-col lg:flex-row'>
        <div className="relative rounded-xl overflow-auto p-8
        hover:animate-pulse cursor-pointer">
            <div className="overflow-hidden relative max-w-md mx-auto bg-white
            shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 
            dark:highlight-white/5">
                <img 
                src={T1Img} 
                alt="T1image" 
                className='absolute -left-6 w-28 h-28
                rounded-full shadow-lg' />
                <div className='min-w-0 py-5 pl-28 pr-5'>
                    <div className='text-slate-900 font-medium text-sm sm:text-base 
                    truncate  dark:text-slate-200'>
                        Name Goes here
                    </div>
                    <div className='to-slate-500 font-medium text-sm sm:text-base
                    leading-tight truncate dark:to-slate-400'>
                        Assistant Manager
                    </div>
                </div>

            </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-8
        hover:animate-pulse cursor-pointer">
            <div className="overflow-hidden relative max-w-md mx-auto bg-white
            shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 
            dark:highlight-white/5">
                <img 
                src={T2Img} 
                alt="T2image" 
                className='absolute -left-6 w-28 h-28
                rounded-full shadow-lg' />
                <div className='min-w-0 py-5 pl-28 pr-5'>
                    <div className='text-slate-900 font-medium text-sm sm:text-base 
                    truncate  dark:text-slate-200'>
                        Name Goes here
                    </div>
                    <div className='to-slate-500 font-medium text-sm sm:text-base
                    leading-tight truncate dark:to-slate-400'>
                        Assistant Manager
                    </div>
                </div>

            </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-8
        hover:animate-pulse cursor-pointer">
            <div className="overflow-hidden relative max-w-md mx-auto bg-white
            shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 
            dark:highlight-white/5">
                <img 
                src={T3Img} 
                alt="T3image" 
                className='absolute -left-6 w-28 h-28
                rounded-full shadow-lg' />
                <div className='min-w-0 py-5 pl-28 pr-5'>
                    <div className='text-slate-900 font-medium text-sm sm:text-base 
                    truncate  dark:text-slate-200'>
                        Name Goes here
                    </div>
                    <div className='to-slate-500 font-medium text-sm sm:text-base
                    leading-tight truncate dark:to-slate-400'>
                        Assistant Manager
                    </div>
                </div>

            </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-8
        hover:animate-pulse cursor-pointer">
            <div className="overflow-hidden relative max-w-md mx-auto bg-white
            shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 
            dark:highlight-white/5">
                <img 
                src={T4Img} 
                alt="T4image" 
                className='absolute -left-6 w-28 h-28
                rounded-full shadow-lg' />
                <div className='min-w-0 py-5 pl-28 pr-5'>
                    <div className='text-slate-900 font-medium text-sm sm:text-base 
                    truncate  dark:text-slate-200'>
                        Name Goes here
                    </div>
                    <div className='to-slate-500 font-medium text-sm sm:text-base
                    leading-tight truncate dark:to-slate-400'>
                        Assistant Manager
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
