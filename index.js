/**
* react-native-check-box
* Checkbox component for react native, it works on iOS and Android
* https://github.com/crazycodeboy/react-native-check-box
* Email:crazycodeboy@gmail.com
* Blog:http://jiapenghui.com
* Forked by: Youke XIANG
* @flow
*/

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.isChecked
    }
  }

  static propTypes = {
    ...View.propTypes,
  }

  _renderLeft() {
    var color = this.props.disabled
      ? '#CCC'
      : '#555';
    if (this.props.leftTextView)
      return this.props.leftTextView;
    if (!this.props.leftText)
      return null;
    return (
      <View style={{
        flexDirection: 'row'
      }}>
        <Image
          source={this.props.leftImage}
          style={[
          this.props.leftImageStyle, {
            tintColor: color
          }
        ]}/>
        <Text
          style={[
          styles.leftText,
          this.props.leftTextStyle, {
            color: color
          }
        ]}>{this.props.leftText}</Text>
      </View>

    );
  }

  _renderRight() {
    if (this.props.rightTextView)
      return this.props.rightTextView;
    if (!this.props.rightText)
      return null;
    return (
      <Text style={[styles.rightText, this.props.rightTextStyle]}>{this.props.rightText}</Text>
    )
  }

  _renderImage() {
    if (this.props.isChecked) {
      return this.props.checkedImage
        ? this.props.checkedImage
        : this.genCheckedImage();
    } else {
      return this.props.unCheckedImage
        ? this.props.unCheckedImage
        : this.genCheckedImage();
    }
  }

  genCheckedImage() {
    var color = this.props.disabled
      ? '#CCC'
      : '#555';
    var source = this.props.isChecked
      ? require('./img/ic_check_box.png')
      : require('./img/ic_check_box_outline_blank.png');

    return (
      <View style={{
        flex: 1,
        alignItems: 'flex-end'
      }}>
        <Image
          source={source}
          style={{
          tintColor: color,
          height: height / 24,
          width: height / 24
        }}/>
      </View>
    );
  }

  onClick() {
    this.props.onClick();
  }

  render() {
    if (this.props.isReverse) {
      return (
        <TouchableHighlight
          style={this.props.style}
          onPress={() => this.onClick()}
          underlayColor='transparent'
          disabled={this.props.disabled}>
          <View style={styles.container}>
            {this._renderImage()}
            {this._renderLeft()}
          </View>
        </TouchableHighlight>
      );
    }
    return (
      <TouchableHighlight
        style={this.props.style}
        onPress={() => this.onClick()}
        underlayColor='transparent'
        disabled={this.props.disabled}>
        <View style={styles.container}>
          {this._renderLeft()}
          {this._renderImage()}
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  leftText: {},
  rightText: {
    flex: 1,
    marginLeft: height / 100
  }
});
