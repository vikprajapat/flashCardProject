import { setModal } from '../../flashCardSlicer/flashcardSlice';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsShare } from "react-icons/bs";
import { TbCopy } from "react-icons/tb";
import {
    FacebookIcon, FacebookShareButton,
    WhatsappShareButton, WhatsappIcon,
    TwitterShareButton, TwitterIcon,
    TelegramShareButton, TelegramIcon,
    LinkedinShareButton, LinkedinIcon,
    EmailShareButton, EmailIcon
} from 'react-share';
import { useDispatch } from 'react-redux';

const ModalShare = () => {

    // CopyToClipboard component will use this link inside it,
    // so that user do not have to type the link
    const INPUT_LINK = 'https://640c2bccdcf746386d4b2f93--snazzy-centaur-213fac.netlify.app/';
    
    const dispatch = useDispatch();
    const shareTestUrl = 'https://640c2bccdcf746386d4b2f93--snazzy-centaur-213fac.netlify.app/';

    return (
        <div className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center'>
                <div className="bg-white p-4 rounded" >

                    <div className='flex justify-between mb-8 max-w-lg'>
                        <BsShare className="text-xl text-slate-500 font-medium mt-2" />
                        <button className='bg-red-600 text-white font-medium text-xl border p-1 px-3 rounded-full '
                            onClick={() => dispatch(setModal())}>
                            X
                        </button>
                    </div>

                    <div className="flex items-center space-x-3 mb-8">
                        <p className="flex items-center flex-1 border-2 p-2 text-xs text-slate-500 border-slate-300 rounded-md border-dashed">
                            Link:
                            <span className="mx-2 font-semibold text-xs overflow-x-hidden text-black">
                            https://640c2bccdcf746386d4b2f93--snazzy-centaur-213fac.netlify.app/
                            </span>
                        </p>
                        
                        <CopyToClipboard text={INPUT_LINK} >
                            <TbCopy className="text-xl text-slate-500 scale-x-[-1] cursor-pointer" />
                        </CopyToClipboard>
                    </div>

                    <div className='flex justify-center mb-6'>
                        <FacebookShareButton url={shareTestUrl} quote={'FlashCard Generator By Tecq buddies'}>
                            <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>

                        <WhatsappShareButton className='ml-6' url={shareTestUrl} quote={'FlashCard Generator By Tecq buddies'}>
                            <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton>

                        <TwitterShareButton className='ml-6' url={shareTestUrl} quote={'FlashCard Generator By Tecq buddies'}>
                            <TwitterIcon size={40} round={true} />
                        </TwitterShareButton>

                        <TelegramShareButton className='ml-6' url={shareTestUrl} quote={'FlashCard Generator By Tecq buddies'}>
                            <TelegramIcon size={40} round={true} />
                        </TelegramShareButton>

                        <LinkedinShareButton className='ml-6' url={shareTestUrl} quote={'FlashCard Generator By Tecq buddies'}>
                            <LinkedinIcon size={40} round={true} />
                        </LinkedinShareButton>

                        <EmailShareButton className='ml-6' url={shareTestUrl} quote={'FlashCard Generator By Tecq buddies'}>
                            <EmailIcon size={40} round={true} />
                        </EmailShareButton>
                    </div>

                </div>
        </div>
    )
}

export default ModalShare

