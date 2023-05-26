const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`; //bgImage를 body에 추가할 것.

document.body.appendChild(bgImage); //appendChile()는 body에 html을 추가할 것.
/*
appendChild 대신에 prepend도 사용 가능!
append는 가장 뒤에,
prepend는 가장 위에 오게 하는 것.
*/

/*보통은 우리가 document 뒤에 querySelector()나 getElementByI()를 사용했다.
createElement()는 써 본 적이 없다.
*/

/*
우리는 항상 html을 먼저 작성하고 Javascript를 사용해서 작성한 html을 다뤄왔다.
한 번도 Javascript에서 뭔가를 생성해서 그걸 html에 추가한 적이 없다.
우리는 이것을 해볼 것.
이미지를 추가하기 위해선 Javascript가 필요하다.
Javascript가 이미지를 추가해줬으면 한다! html만으로는 추가할 수 없다.
정리
=>
Javascript에서 이미지를 만들고 이걸 html에 추가한다!
*/

/*
이제 무작위성이 있는 것들은 모두 끝냈다.
명언, 이미지 등.
*/