import React from 'react';
import './ImageBlocks.css';
import GradeTwoToneIcon from '@material-ui/icons/GradeTwoTone';

const ImageBlocks = () => {
    return (
        <div>
            <div className="box d-flex" style={{justifyContent: 'space-between'}}>
                <span><img src="https://cdn.shopify.com/s/files/1/0646/1285/files/SS20_Drop_1-Gallery_Images-Capri_Rose_Cloud-Women-2_x700.jpg?v=1581612064" alt=""/></span>
                <span><img src="https://cdn.shopify.com/s/files/1/0646/1285/files/SS20_Drop_1-Gallery_Images-Capri_Rose_Cloud-Women-1_x700.jpg?v=1581612048" alt=""/></span>
                <span><img src="https://cdn.shopify.com/s/files/1/0646/1285/files/SS20_Drop_1-Gallery_Images-Capri_Rose_Cloud-Women-3_x700.jpg?v=1581612076" alt=""/></span>
            </div>
        </div>
    );
};

export default ImageBlocks;