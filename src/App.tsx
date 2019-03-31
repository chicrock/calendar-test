import { AppLoading, Asset, Font } from "expo";
import React from "react";
import AppContainer from "./Components/App";

interface IState {
  isLoadingComplete: boolean;
}
interface IProps {}

export default class App extends React.Component<IProps, IState> {
  public state = {
    isLoadingComplete: false,
  };

  public render() {
    const { isLoadingComplete } = this.state;

    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    return <AppContainer />;
  }

  public _loadAssetsAsync = async (): Promise<void> => {
    await Promise.all([
      Asset.loadAsync([
        require("../assets/images/noPhoto.jpg"),
        require("../assets/images/photoPlaceholder.png"),
        require("../assets/images/kakao_login_btn_small.png"),
      ]),
      Font.loadAsync({}),
    ]);
  };
  public _handleLoadingError = (error: Error): void => {
    console.error(error.message);
  };
  public _handleFinishLoading = async (): Promise<void> => {
    this.setState({ isLoadingComplete: true });
  };
}
