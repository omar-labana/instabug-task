<template>
    <div class="flex-1 bg-blue flex flex-col content-center">
        <div class="w-full flex flex-col content-center slider-body fade">
            <img
                src="../../assets/illustration-1.svg"
                alt=""
                class="max-w-65"
            />
            <h2 class="text-white mt-15 text-center">
                Accelerate Your Entire Mobile Team Workflow
            </h2>
        </div>
        <div class="w-full flex flex-col content-center slider-body fade">
            <img
                src="../../assets/illustration-2.svg"
                alt=""
                class="max-w-65"
            />
            <h2 class="text-white mt-15 text-center">
                The Most Comprehenive Bug Reporting Tool for Mobile Apps
            </h2>
        </div>
        <div class="w-full flex flex-col content-center slider-body fade">
            <img
                src="../../assets/illustration-3.svg"
                alt=""
                class="max-w-65"
            />
            <h2 class="text-white mt-15 text-center">
                Secure Crash Reporting With Real-Time Alerts
            </h2>
        </div>
        <div clas="text-center mt-30">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        var slideIndex = 0
        showSlides()

        function showSlides() {
            const slides = document.getElementsByClassName('slider-body')
            const dots = document.getElementsByClassName('dot')
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none'
            }
            slideIndex++
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(' active', '')
            }
            slides[slideIndex - 1].style.display = 'inherit'
            dots[slideIndex - 1].className += ' active'
            setTimeout(showSlides, 4000)
        }
    },
}
</script>

<style>
</style>