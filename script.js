        $('#resize-button').click(function() {
            const inputImage = document.getElementById('input-image');
            if (inputImage.files && inputImage.files[0]) {
                const fileReader = new FileReader();
                fileReader.onload = function(event) {
                    const image = new Image();
                    image.onload = function() {
                        const canvas = document.createElement('canvas');
                        canvas.width = 180;
                        canvas.height = 80;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                        canvas.toBlob(function (blob) {
                            const url = URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            link.href = url;
                            link.download = 'resized-image.jpg';
                            link.innerHTML = 'Download Resized Image';
                            const outputImage = document.getElementById('resized-image');
                            outputImage.src = url;
                            outputImage.parentNode.appendChild(link);
                        }, 'image/jpeg', 0.7);
                    };
                    image.src = event.target.result;
                };
                fileReader.readAsDataURL(inputImage.files[0]);
            }
        });
