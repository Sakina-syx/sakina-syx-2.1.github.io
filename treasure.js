class TreasureAnimation {
  constructor() {
      console.log('TreasureAnimation constructor called');
      this.canvas = document.getElementById('treasureCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.stage = 0;
      this.animationFrameId = null;
  }

  drawScene() {
      console.log('drawScene called');
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      switch (this.stage) {
          case 0:
              this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
              this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
              this.ctx.fillStyle = 'black';
              this.ctx.font = '24px Arial';
              this.ctx.fillText('在古老的图书馆里找到了第一个线索...', 50, 50);
              document.querySelectorAll('.scene-image')[0].style.display = 'block';
              break;
          case 1:
              this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
              this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
              this.ctx.fillStyle = 'black';
              this.ctx.font = '24px Arial';
              this.ctx.fillText('解码成功!宝藏在一座古老的神庙中...', 50, 50);
              document.querySelectorAll('.scene-image')[1].style.display = 'block';
              break;
          case 2:
              this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
              this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
              this.ctx.fillStyle = 'black';
              this.ctx.font = '24px Arial';
              this.ctx.fillText('神秘智者告诉你，神庙中有隐藏的通道。', 50, 50);
              document.querySelectorAll('.scene-image')[2].style.display = 'block';
              break;
          case 3:
              this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
              this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
              this.ctx.fillStyle = 'black';
              this.ctx.font = '24px Arial';
              this.ctx.fillText('找到了一个神秘的箱子...', 50, 50);
              document.querySelectorAll('.scene-image')[3].style.display = 'block';
              break;
          case 4:
              this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
              this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
              this.ctx.fillStyle = 'black';
              this.ctx.font = '24px Arial';
              this.ctx.fillText('恭喜!你找到了传说中的宝藏!', 50, 50);
              document.querySelectorAll('.scene-image')[4].style.display = 'block';
              break;
      }
  }

  async animate() {
      console.log('animate called');
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.stage++;
      if (this.stage < 5) {
          this.drawScene();
          this.animationFrameId = requestAnimationFrame(() => this.animate());
      }
  }
}

document.getElementById('startButton').addEventListener('click', async () => {
  console.log('按钮被点击');
  const treasureAnimation = new TreasureAnimation();
  treasureAnimation.drawScene();
  await treasureAnimation.animate();
});