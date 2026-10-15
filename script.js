const fates=[
  "A SUPRISE: YOU GOT AN ANNOYING HUSBAND FOR LIFETIME.HE GOT SOME FEATURES:U CAN BEAT HIM WHATEVER WAY U WANT😝. HE WILL COOK FOR U 😌 AND FOR MORE FEATURES U HAVE TO BUY HIM .THERE IS A LITTLE EXTRA FEATURE GIVEN FROM THE COMPANY HE WILL LOVE U SO MUCH 😋😋",
  "A PROMISE 😝 : U ARE BOUND WITH A PROMISE TO DO A PILLOW FIGHT WITH UR BABY 🙂‍↕️🙂‍↔️",
  "STOP RIGHT THERE 😠 :CAN I SEE UR SMILE 😋 IF YES THEN SEND IT TO ME 😝",
  "MEDICAL REPORT : YOUR HUSBAND IS FOUND WITH DEFICIENCY OF HIS WIFE 😔.HE NEEDS UR CHEEKS TO GET BETTER😔😔",
  "PERSONAL MESSAGE :  WELL BABY I KNOW SOMETIMES U FEEL HEAVY ,OVERTHINK AND THINK WORST SCENARIOS AND THE WORST PART IS THAT I AM NOT THERE WITH U .BUT BABY I WANT U TO REMEMBER THAT I AM ALWAYS HERE FOR U 😆.I KNOW BABY U CAN HANDLE ALONE BUT I JUST WANT TO BE THERE WITH U EVEN IF U ARE ALONE ,I WANT TO SIT WITH U IN THAT SILENCE U CAN SHARE TO ME WHATEVER U WANT I WILL LISTEN TO IT SITTING BESIDE U😋.AND BABY IF U EVER FEEL U ARE NOT ENOUGH ,I WANT U TO KNOW THAT THERE IS UR IDIOT HUSBAND WHO LOVES U 😝,BABY IF U FEEL U DON'T DESERVE LOVE ,I WILL MAKE U FEEL THAT U DESERVE THE MOST LOVE IN THIS WORLD 😋AND I AM HERE FOR U ,U CAN LEAN ON ME AND CRY ,SHARE ANYTHING TO ME ,TELL ME ANYTHING ,U CAN ALSO  FIGHT  TO ME IF U WANT SOMETIMES😝😝.AND AT THE LAST BABY I AM JUST URS ,I LOVE U 😋😋,AND ONE MORE THING BABY SHARE WITH ME WHEN U ARE COMFORTABLE,NOT FORCED OR GUILT ,I JUST WANT TO SEE SMILE ON MY WIFE FACE 😝"
];
let unusedFates = [...fates];
const button = document.querySelector("#doom-button");
const retry = document.querySelector("#retry");
const popup = document.querySelector("#message-popup");
const popupMessage = document.querySelector("#popup-message");
const closePopup = document.querySelector("#close-popup");

function makeDoom() {
     if (unusedFates.length === 0) {
    unusedFates = [...fates];
    document.querySelector("#result").style.display = "block";
}

const randomIndex = Math.floor(Math.random() * unusedFates.length);
const message = unusedFates.splice(randomIndex, 1)[0];

    document.querySelector("#result").textContent = message;
popupMessage.textContent = message;
popup.classList.remove("popup-hidden");
}

button.addEventListener("click", makeDoom);
retry.addEventListener("click", function() {
    popup.classList.add("popup-hidden");
    popupMessage.textContent = "";
    document.querySelector("#result").textContent =
        "Your random fate will appear here...";
        document.querySelector("#result").style.display = "none";
});

closePopup.addEventListener("click", function() {
    popup.classList.add("popup-hidden");
});