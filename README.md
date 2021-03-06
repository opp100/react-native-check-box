# react-native-check-box

[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/crazycodeboy/react-native-check-box/pulls) [![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/crazycodeboy/react-native-check-box/master/LICENSE)

Checkbox component for react native, it works on iOS and Android. And image option for label.

## Content

- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

- 1.Run `npm i react-native-check-box@https://github.com/opp100/react-native-check-box.git --save`
- 2.`import CheckBox from 'react-native-check-box'`

## Demo

- [Examples](https://github.com/crazycodeboy/react-native-check-box/tree/master/examples)

![Screenshots](https://raw.githubusercontent.com/crazycodeboy/react-native-check-box/master/examples/Screenshots/react-native-check-box-screenshots.gif)

## Getting started

Add `react-native-check-box` to your js file.

`import CheckBox from 'react-native-check-box'`

Inside your component's render method, use CheckBox:

```javascript
<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>this.onClick(data)}
    isChecked={data.checked}
    leftText={leftText}
/>;
```

Then you can use it like this:

### Basic usage

```javascript
 <CheckBox
     style={{flex: 1, padding: 10}}
     onClick={()=>this.onClick(data)}
     isChecked={data.checked}
     leftText={leftText}
 />;
```

### advance usage
```javascript
 <CheckBox
   style={{...containerStyle}}
   disabled={true}
   isReverse={true}
   onClick={() => {
   this.state.check = !this.state.check;
 }}
   leftImage={require('./Assets/icon/icon.png')}
   leftImageStyle={{...iconStyle}}
   isChecked={this.state.check}
   leftText='TextLabel'
   leftTextStyle={{...textStyle}}/>
```

### Custom CheckBox

```javascript
renderCheckBox(data) {
    var leftText = data.name;
    return (
        <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={()=>this.onClick(data)}
            isChecked={data.checked}
            leftText={leftText}
            checkedImage={<Image source={require('../../page/my/img/ic_check_box.png')} style={this.props.theme.styles.tabBarSelectedIcon}/>}
            unCheckedImage={<Image source={require('../../page/my/img/ic_check_box_outline_blank.png')} style={this.props.theme.styles.tabBarSelectedIcon}/>}
        />);
}
```

```javascript
```

**More Usage:**

[GitHubPopular](https://github.com/crazycodeboy/GitHubPopular/blob/develop/js/page/my/CustomKeyPage.js)

## API

Props          | Type                            | Optional | Default       | Description
-------------- | ------------------------------- | -------- | ------------- | -----------------------
style          | View.propTypes.style            | true     |               | Custom style checkbox
disabled       | View.propTypes.bool             | true     | false         | disabled click event
isReverse      | View.propTypes.bool             | true     | false         | reverse the left and right
leftText       | React.PropTypes.string          | true     |               | Custom left Text
rightText      | React.PropTypes.string          | true     |               | Custom right Text
leftImage      | React.PropTypes.element         | true     |               | Custom left Image
leftImageStyle | Text.propTypes.style            | true     |               | Custom left Image style
checkedImage   | React.PropTypes.element         | true     | Default image | Custom checked Image
unCheckedImage | React.PropTypes.element         | true     | Default image | Custom unchecked Image
isChecked      | React.PropTypes.bool            | false    | false         | checkbox checked state
onClick        | React.PropTypes.func.isRequired | false    |               | callback function

## Contribution

Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

--------------------------------------------------------------------------------

**MIT Licensed**
