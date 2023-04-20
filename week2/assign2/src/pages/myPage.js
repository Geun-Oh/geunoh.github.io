import { giveItemsDnDEvent } from "../handler/dndEventHandler";
import MyPageView from "../views/myPageView";

function MyPage($container) {
    this.$container = $container;

    this.render = () => {
        this.$container.innerHTML = MyPageView();
        const calendarButton = document.querySelector("#calendarPage_button");
        calendarButton.addEventListener('click', () => {
            window.location.href = '/';
          });
        giveItemsDnDEvent();
    };
    this.render();
};

export default MyPage;