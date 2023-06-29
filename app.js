class HexColor {
    constructor() {
        this.hexInput = document.getElementById("hex");
        this.hexCopy = document.getElementById("hex-btn");
        this.btn = document.querySelector(".hex-color--btn");
        this.hex_c = document.querySelector(".hex_c");

        this.colorChange = this.colorChange.bind(this);
        this.copyHexValue = this.copyHexValue.bind(this);
        this.updateColor = this.updateColor.bind(this);
    }

    event() {
        this.btn.addEventListener("click", this.colorChange);
        this.hexCopy.addEventListener("click", this.copyHexValue);
        this.hexInput.addEventListener("input", this.updateColor);
    }

    generateRandomHexColor() {
        const hexStr = "0123456789abcdef";
        let color = "";
        for (let i = 0; i < 6; i++) {
            color += hexStr[Math.floor(Math.random() * hexStr.length)];
        }
        return color;
    }

    setColorAndValue(color) {
        document.body.style.backgroundColor = `#${color}`;
        this.hexInput.value = `#${color}`;
    }

    colorChange() {
        const color = this.generateRandomHexColor();
        this.setColorAndValue(color);
    }

    copyToClipboard(text) {
        navigator.clipboard.writeText(text)
          .then(() => {
            this.hex_c.innerHTML = "Hex Color Kopyalandı !";
            setTimeout(() => {
              this.hex_c.innerHTML = "";
            }, 5000);
          })
          .catch((error) => {
            console.error("Unable to copy text to clipboard:", error);
          });
      }
      

    copyHexValue() {
        const hexValue = this.hexInput.value;
        this.copyToClipboard(hexValue);
    }

    updateColor() {
        const inputValue = this.hexInput.value.replace("#", "");
        if (inputValue.length === 6 || inputValue.length === 3) {
            this.setColorAndValue(inputValue);
        }
    }
}

const hexColor = new HexColor();
hexColor.event();
