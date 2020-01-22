import React from 'react';

const ColorList = ({ colorList, setColorFromList, loadColorList }) => {
  
  return (

    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle"
        type="button" id="dropdownMenuButton"
        data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false"
        onClick={loadColorList}
      >
        Color selection
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {colorList.map(item => <div className="color_selection"><a class="dropdown-item" href="#" style={{ color: item.colorName }}
          onClick={() => setColorFromList(item.hex)}>
          {item.colorName}
          <div className='color_block' style={{ backgroundColor: item.hex }} ></div>
        </a></div>)}
      </div>
    </div>
  );
};

export default ColorList;