'use client';

import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share';

const SocialShare = ({ id, dict }) => {


    return (
        <div className="flex gap-3 mt-4">
            <div>
                <h1>{dict.share_in_social_media}</h1>
                <div className='flex gap-4'>
                    <FacebookShareButton
                        url={`http://localhost:3000/productDetails/${id}`} >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <PinterestShareButton
                        url={`http://localhost:3000/productDetails/${id}`} >
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>
                    <RedditShareButton
                        url={`http://localhost:3000/productDetails/${id}`} >
                        <RedditIcon size={32} round />
                    </RedditShareButton>
                    <WhatsappShareButton
                        url={`http://localhost:3000/productDetails/${id}`} >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                        url={`http://localhost:3000/productDetails/${id}`} >
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </div>
            </div>
        </div>
    );
};

export default SocialShare;