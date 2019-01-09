import React, { Component } from "react";
import { CardSection } from "./components/commons";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Platform,
  UIManager
} from "react-native";
import * as actions from "./actions";
import { connect } from "react-redux";

class ListItem extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    // const { library, expanded } = this.props;
    // if (expanded) {
    //   return <Text style={{ flex: 1 }}>{library.item.description}</Text>;
    // }
    if (this.props.library.item.id === this.props.selectedLibraryId) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.library.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  //const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return {
    selectedLibraryId: state.selectedLibraryId
  };
  // return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
