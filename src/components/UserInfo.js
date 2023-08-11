export default class UserInfo {
    constructor({profileName, profileDesctiption, profileAvatar}) {
        this._profileName = document.querySelector(profileName);
        this._profileDesctiption = document.querySelector(profileDesctiption);
        this._profileAvatar = document.querySelector(profileAvatar);
    }

    getUserInfo() {
        return {
            name: this._profileName.textContent,
            about: this._profileDesctiption.textContent,
            avatar: this._profileAvatar.src
        }
    }

    setUserInfo({name, about, avatar}) {
        this._profileName.textContent = name;
        this._profileDesctiption.textContent = about;
        this._profileAvatar.src = avatar;
    }
}