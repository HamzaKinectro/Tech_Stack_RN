import React, { Component } from "react";
import { CardSection } from "./components/commons";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import * as actions from "./actions";
import { connect } from "react-redux";

class ListItem extends Component {
  renderDescription() {
    if (this.props.library.item.id === this.props.selectedLibraryId) {
      return <Text>{this.props.library.item.description}</Text>;
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

const mapStateToProps = state => {
  return {
    selectedLibraryId: state.selectedLibraryId
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
