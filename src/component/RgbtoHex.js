import React from 'react';
import ColorList from './ColorList'

const color = [{ colorName: "RED", hex: '#ff0000' }, { colorName: "BLUE", hex: '#0000ff' },
{ colorName: "YELLOW", hex: '#ffff00' }, { colorName: "GREEN", hex: '#00ff00' }];

class RgbtoHex extends React.Component {
  state = {
    redValue: 0,
    greenValue: 0,
    blueValue: 0,
    hexValue: '',
    colorList: [],
    hexCode: '',
    isClick: false
  }

  loadRGB = () => {
    this.setState({
      isClick: true
    })
  }
  setColorFromList = (hex) => {
    this.setState({
      hexValue: hex,
      hexCode: hex
    })
  }

  getHexFromInt = (int) => {
    let hex = Number(int).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  }

  loadHexValue = () => {
    const { redValue, greenValue, blueValue } = this.state;
    this.setState({
      hexValue: '#' + this.getHexFromInt(redValue) + this.getHexFromInt(greenValue)
        + this.getHexFromInt(blueValue),
    });
  }

  loadHexCode = () => {
    const { redValue, greenValue, blueValue } = this.state;
    this.setState({
      hexCode: '#' + this.getHexFromInt(redValue) + this.getHexFromInt(greenValue)
        + this.getHexFromInt(blueValue),
    });
  }

  setColor = (color, value) => {
    this.setState((prevState) => ({
      ...prevState,
      [color]: value,
    }), () => {
      this.loadHexValue()
    })
  }

  loadColorList = () => {
    this.setState({
      colorList: [...color]
    })
  }

  render() {
    const { colorList, redValue, greenValue, blueValue, hexCode, hexValue } = this.state;
    return (
      <div className="App">
        <div class="input-group">
          <input type="text" class="form-control hex" aria-label="Text input with dropdown button"
            value={hexCode}></input>
          <div class="input-group-append">
            <button class=" main_color_block"
              style={{ backgroundColor: hexValue }} onClick={this.loadRGB}
              type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
            <div class="dropdown-menu">
              <div className="rgb_menu">
                <p className="rgb">R<input class="dropdown-item " type='range' value={redValue}
                  min="0" max="255" className="range"
                  onChange={(event) => this.setColor('redValue', event.target.value)}></input></p>
                <p className="rgb">G<input class="dropdown-item" type='range' value={greenValue}
                  min="0" max="255" className="range"
                  onChange={(event) => this.setColor('greenValue', event.target.value)}></input></p>
                <p className="rgb">B<input class="dropdown-item" type='range' value={blueValue}
                  min="0" max="255" className="range"
                  onChange={(event) => this.setColor('blueValue', event.target.value)}></input></p>
              </div>
              <div className='button'>
                <button class="dropdown-item" type='button' onClick={this.loadHexCode}>Ok</button>
                <button class="dropdown-item " type='button'>Cancel</button></div>
            </div>
          </div>
        </div>
        <ColorList colorList={colorList}
          setColorFromList={this.setColorFromList}
          loadColorList={this.loadColorList} />
      </div>
    )
  }
}
export default RgbtoHex;
