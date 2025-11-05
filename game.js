class PointAndClickGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.introOverlay = document.getElementById('introOverlay');
        this.clickToStart = document.getElementById('clickToStart');
        this.loadingProgress = document.getElementById('loadingProgress');
        this.loadingPercent = document.getElementById('loadingPercent');
        this.assetsReady = false;
        
        // Add global click handler - works anywhere on screen
        this.introClickHandler = (e) => {
            if (this.assetsReady && !this.isLoading) {
                // Remove the handler after first click
                document.removeEventListener('click', this.introClickHandler);
                document.removeEventListener('touchstart', this.introClickHandler);
                if (this.introOverlay) {
                    this.introOverlay.removeEventListener('click', this.introClickHandler);
                    this.introOverlay.removeEventListener('touchstart', this.introClickHandler);
                }
                this.hideIntroAndStart();
            }
        };
        
        // Add click handlers for both mouse and touch
        document.addEventListener('click', this.introClickHandler);
        document.addEventListener('touchstart', this.introClickHandler);
        
        // Also add handler directly to overlay to catch clicks on text
        if (this.introOverlay) {
            this.introOverlay.addEventListener('click', this.introClickHandler);
            this.introOverlay.addEventListener('touchstart', this.introClickHandler);
        }
        
        // Game state
        this.currentLocation = 'video1';
        this.isTransitioning = false;
        this.showingVideo4 = false;  // State for video4
        this.preparingVideo4 = false;  // Preparing state for video4
        this.showingVideo5 = false;  // State for video5
        this.showingVideo6 = false;  // State for video6
        this.preparingVideo6 = false;  // Preparing state for video6
        this.showingVideo7 = false;  // State for video7
        this.preparingVideo8 = false;  // Preparing state for video8
        this.showingVideo8 = false;  // State for video8
        this.showingVideo9 = false;  // State for video9
        this.preparingVideo10 = false;  // Preparing state for video10
        this.showingVideo10 = false;  // State for video10
        this.showingVideo11 = false;  // State for video11
        this.preparingVideo12 = false;  // Preparing state for video12
        this.showingVideo12 = false;  // State for video12
        this.showingVideo13 = false;  // State for video13
        this.preparingVideo14 = false;  // Preparing state for video14
        this.showingVideo14 = false;  // State for video14
        this.showingVideo15 = false;  // State for video15
        this.preparingVideo16 = false;  // Preparing state for video16
        this.showingVideo16 = false;  // State for video16
        this.showingVideo17 = false;  // State for video17
        this.preparingVideo18 = false;  // Preparing state for video18
        this.showingVideo18 = false;  // State for video18
        this.preparingVideo19 = false;  // Preparing state for video19
        this.showingVideo19 = false;  // State for video19
        this.showingVideo20 = false;  // State for video20
        this.preparingVideo21 = false;  // Preparing state for video21
        this.showingVideo21 = false;  // State for video21
        this.preparingVideo22 = false;  // Preparing state for video22
        this.showingVideo22 = false;  // State for video22
        this.showingVideo23 = false;  // State for video23
        this.preparingVideo24 = false;  // Preparing state for video24
        this.showingVideo24 = false;  // State for video24
        this.showingVideo25 = false;  // State for video25
        this.preparingVideo26 = false;  // Preparing state for video26
        this.showingVideo26 = false;  // State for video26
        this.preparingVideo27 = false;  // Preparing state for video27
        this.showingVideo27 = false;  // State for video27
        this.preparingVideo28 = false;  // Preparing state for video28
        this.showingVideo28 = false;  // State for video28
        this.showingVideo29 = false;  // State for video29
        this.preparingVideo30 = false;  // Preparing state for video30
        this.showingVideo30 = false;  // State for video30
        this.preparingVideo31 = false;  // Preparing state for video31
        this.showingVideo31 = false;  // State for video31
        this.showingVideo32 = false;  // State for video32
        this.preparingVideo33 = false;  // Preparing state for video33
        this.showingVideo33 = false;  // State for video33
        this.preparingVideo34 = false;  // Preparing state for video34
        this.showingVideo34 = false;  // State for video34
        this.showingVideo35 = false;  // State for video35
        this.preparingVideo36 = false;  // Preparing state for video36
        this.showingVideo36 = false;  // State for video36
        this.introShown = false;  // Show intro overlay for video1
        // Loading progress counters
        this.totalAssets = 0;
        this.loadedAssets = 0;
        this.loadingCallsFinished = false; // set true after all load calls scheduled
        this.assets = {
            image1: null,    // Background for video1
            video1: null,    // Looping video for first location
            video2: null,    // Transition video
            image2: null,    // Background for video3
            video3: null,    // Looping video for second location
            video4: null,    // Video for left zone of video3
            video5: null,    // Looping video after video4
            image3: null,    // Background for video5
            video6: null,    // Transition video for video5
            video7: null,    // Looping video after video6
            image4: null,    // Background for video7
            video8: null,    // Transition video for right zone of video7
            video9: null,    // Looping video after video8
            image5: null,    // Background for video9
            video10: null,   // Transition video for left zone of video7
            video11: null,   // Looping video after video10
            image6: null,    // Background for video11
            video12: null,   // Transition video for right zone of video3
            video13: null,   // Looping video after video12
            image7: null,    // Background for video13
            video14: null,   // Transition video for video11
            video15: null,   // Looping video after video14
            image8: null,    // Background for video15
            video16: null,   // Transition video for right zone of video13
            video17: null,   // Looping video after video16
            image9: null,    // Background for video17
            video18: null,   // Transition video for left zone of video15
            video19: null,   // Transition video for right zone of video15
            video20: null,   // Looping video after video19
            image10: null,   // Background for video20
            video21: null,   // Transition video for return to start
            video22: null,   // Transition video for video9
            video23: null,   // Looping video after video22
            image11: null,   // Background for video23
            video24: null,   // Transition video for video17
            video25: null,   // Looping video after video24
            image12: null,   // Background for video25
            video26: null,   // Transition video for return to start from video25
            video27: null,   // Transition video for return to start from video23
            video28: null,   // Transition video for left zone of video13
            video29: null,   // Looping video after video28
            image13: null,   // Background for video29
            video30: null,   // Transition video for return to start from video29
            video31: null,   // Transition video for right zone of video23
            video32: null,   // Looping video after video31
            image14: null,   // Background for video32
            video33: null,   // Transition video for return to start from video32
            video34: null,   // Transition video for left zone of video25
            video35: null,   // Looping video after video34
            image15: null,   // Background for video35
            video36: null,   // Transition from video35 to start
            audio1: null
        };
        
        // Canvas setup
        this.setupCanvas();
        
        // Load assets
        this.loadAssets();
        
        // Event listeners setup
        this.setupEventListeners();
    }
    
    startVideo34Transition() {
        console.log('Starting video34 transition...');
        
        // Pause video25 but keep showing it until video34 is ready
        this.assets.video25.pause();
        // Hide video25 branch so rendering switches to video34 preparation branch
        this.showingVideo25 = false;
        this.assets.video34.currentTime = 0;
        this.preparingVideo34 = true;  // Flag: show background while video is preparing
        
        // Ensure video34 is not looped
        this.assets.video34.loop = false;
        
        // Start video34 when ready
        const startVideo34 = () => {
            this.preparingVideo34 = false;
            this.showingVideo34 = true;
            this.assets.video34.play();
        };
        
        if (this.assets.video34.readyState >= 2) {
            startVideo34();
        } else {
            this.assets.video34.addEventListener('canplay', startVideo34, { once: true });
        }
        
        // After video34 ends — transition to video35 (looping)
        if (!this.assets.video34.hasEndedListener) {
            this.assets.video34.addEventListener('ended', () => {
                console.log('Video34 ended, transitioning to video35');
                this.showingVideo34 = false;
                this.showingVideo35 = true;
                
                this.assets.video35.currentTime = 0;
                this.assets.video35.loop = true;
                this.assets.video35.play();
                
                // Reset flag so handler can be added again in the future
                this.assets.video34.hasEndedListener = false;
            }, { once: true });
            this.assets.video34.hasEndedListener = true;
        }
    }

    startVideo36Transition() {
        console.log('Starting video36 transition - returning to start...');
        
        // Pause video35, showing its frame while video36 is preparing
        this.assets.video35.pause();
        this.assets.video36.currentTime = 0;
        this.preparingVideo36 = true;
        
        // Ensure video36 is not looped
        this.assets.video36.loop = false;
        
        const startVideo36 = () => {
            this.preparingVideo36 = false;
            this.showingVideo36 = true;
            this.assets.video36.play();
        };
        
        if (this.assets.video36.readyState >= 2) {
            startVideo36();
        } else {
            this.assets.video36.addEventListener('canplay', startVideo36, { once: true });
        }
        
        if (!this.assets.video36.hasEndedListener) {
            this.assets.video36.addEventListener('ended', () => {
                console.log('Video36 ended, returning to video1 (start)');
                
                // Reset all showing states
                this.showingVideo36 = false;
                this.showingVideo35 = false;
                this.showingVideo34 = false;
                this.showingVideo33 = false;
                this.showingVideo32 = false;
                this.showingVideo31 = false;
                this.showingVideo30 = false;
                this.showingVideo29 = false;
                this.showingVideo28 = false;
                this.showingVideo27 = false;
                this.showingVideo26 = false;
                this.showingVideo25 = false;
                this.showingVideo24 = false;
                this.showingVideo23 = false;
                this.showingVideo22 = false;
                this.showingVideo21 = false;
                this.showingVideo20 = false;
                this.showingVideo19 = false;
                this.showingVideo18 = false;
                this.showingVideo17 = false;
                this.showingVideo16 = false;
                this.showingVideo15 = false;
                this.showingVideo14 = false;
                this.showingVideo13 = false;
                this.showingVideo12 = false;
                this.showingVideo11 = false;
                this.showingVideo10 = false;
                this.showingVideo9 = false;
                this.showingVideo8 = false;
                this.showingVideo7 = false;
                this.showingVideo6 = false;
                this.showingVideo5 = false;
                this.showingVideo4 = false;
                
                // Reset all preparing states
                this.preparingVideo36 = false;
                this.preparingVideo35 = false;
                this.preparingVideo34 = false;
                this.preparingVideo33 = false;
                this.preparingVideo31 = false;
                this.preparingVideo30 = false;
                this.preparingVideo28 = false;
                this.preparingVideo27 = false;
                this.preparingVideo26 = false;
                this.preparingVideo24 = false;
                this.preparingVideo22 = false;
                this.preparingVideo21 = false;
                this.preparingVideo19 = false;
                this.preparingVideo18 = false;
                this.preparingVideo16 = false;
                this.preparingVideo14 = false;
                this.preparingVideo12 = false;
                this.preparingVideo10 = false;
                this.preparingVideo8 = false;
                this.preparingVideo6 = false;
                this.preparingVideo4 = false;
                
                // Pause all videos to ensure clean state
                this.assets.video2.pause();
                this.assets.video3.pause();
                this.assets.video4.pause();
                this.assets.video5.pause();
                this.assets.video6.pause();
                this.assets.video7.pause();
                this.assets.video8.pause();
                this.assets.video9.pause();
                this.assets.video10.pause();
                this.assets.video11.pause();
                this.assets.video12.pause();
                this.assets.video13.pause();
                this.assets.video14.pause();
                this.assets.video15.pause();
                this.assets.video16.pause();
                this.assets.video17.pause();
                this.assets.video18.pause();
                this.assets.video19.pause();
                this.assets.video20.pause();
                this.assets.video21.pause();
                this.assets.video22.pause();
                this.assets.video23.pause();
                this.assets.video24.pause();
                this.assets.video25.pause();
                this.assets.video26.pause();
                this.assets.video27.pause();
                this.assets.video28.pause();
                this.assets.video29.pause();
                this.assets.video31.pause();
                this.assets.video30.pause();
                this.assets.video32.pause();
                this.assets.video33.pause();
                this.assets.video34.pause();
                this.assets.video35.pause();
                
                // Reset currentTime for all videos
                this.assets.video2.currentTime = 0;
                this.assets.video3.currentTime = 0;
                this.assets.video4.currentTime = 0;
                this.assets.video5.currentTime = 0;
                this.assets.video6.currentTime = 0;
                this.assets.video7.currentTime = 0;
                this.assets.video8.currentTime = 0;
                this.assets.video9.currentTime = 0;
                this.assets.video10.currentTime = 0;
                this.assets.video11.currentTime = 0;
                this.assets.video12.currentTime = 0;
                this.assets.video13.currentTime = 0;
                this.assets.video14.currentTime = 0;
                this.assets.video15.currentTime = 0;
                this.assets.video16.currentTime = 0;
                this.assets.video17.currentTime = 0;
                this.assets.video18.currentTime = 0;
                this.assets.video19.currentTime = 0;
                this.assets.video20.currentTime = 0;
                this.assets.video21.currentTime = 0;
                this.assets.video22.currentTime = 0;
                this.assets.video23.currentTime = 0;
                this.assets.video24.currentTime = 0;
                this.assets.video25.currentTime = 0;
                this.assets.video26.currentTime = 0;
                this.assets.video27.currentTime = 0;
                this.assets.video28.currentTime = 0;
                this.assets.video29.currentTime = 0;
                this.assets.video31.currentTime = 0;
                this.assets.video30.currentTime = 0;
                this.assets.video32.currentTime = 0;
                this.assets.video33.currentTime = 0;
                this.assets.video34.currentTime = 0;
                this.assets.video35.currentTime = 0;
                
                // Return to initial location
                this.currentLocation = 'video1';
                this.isTransitioning = false;
                
                // Start video1 from beginning
                this.assets.video1.currentTime = 0;
                this.assets.video1.play();
                
                // Reset flag so handler can be added again in next cycle (must be last)
                this.assets.video36.hasEndedListener = false;
            }, { once: true });
            this.assets.video36.hasEndedListener = true;
        }
    }

    // startVideo36Transition removed by request

    // (reverted) startVideo34Transition and startVideo36Transition were removed

    setupCanvas() {
        const resizeCanvas = () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
    }
    
    async loadAssets() {
        try {
            this.isLoading = true;
            this.loadingCallsFinished = false;
            
            // First, load only video1 and image1 to show immediately
            console.log('Loading initial assets (video1, image1)...');
            // Don't count these in totalAssets for background loading
            const initialImage1 = await this.loadImageWithoutCounting('image/image1.png');
            const initialVideo1 = await this.loadVideoWithoutCounting('video/video1.mp4');
            this.assets.image1 = initialImage1;
            this.assets.video1 = initialVideo1;
            
            // Set up initial state and start showing video1
            this.currentLocation = 'video1';
            this.isTransitioning = false;
            
            // Start video1 and game loop immediately
            if (this.assets.video1) {
                this.assets.video1.play().catch(err => {
                    console.error('Error playing video1:', err);
                });
            }
            this.gameLoop();
            
            // Now load the rest of assets in the background
            console.log('Loading remaining assets in background...');
            this.totalAssets = 0;
            this.loadedAssets = 0;
            
            // Load remaining images and videos
            this.assets.video2 = await this.loadVideo('video/video2.mp4');
            this.assets.image2 = await this.loadImage('image/image2.png');
            this.assets.video3 = await this.loadVideo('video/video3.mp4');
            this.assets.video4 = await this.loadVideo('video/video4.mp4');
            this.assets.video5 = await this.loadVideo('video/video5.mp4');
            this.assets.image3 = await this.loadImage('image/image3.png');
            this.assets.video6 = await this.loadVideo('video/video6.mp4');
            this.assets.video7 = await this.loadVideo('video/video7.mp4');
            this.assets.image4 = await this.loadImage('image/image4.png');
            this.assets.video8 = await this.loadVideo('video/video8.mp4');
            this.assets.video9 = await this.loadVideo('video/video9.mp4');
            this.assets.image5 = await this.loadImage('image/image5.png');
            this.assets.video10 = await this.loadVideo('video/video10.mp4');
            this.assets.video11 = await this.loadVideo('video/video11.mp4');
            this.assets.image6 = await this.loadImage('image/image6.png');
            this.assets.video12 = await this.loadVideo('video/video12.mp4');
            this.assets.video13 = await this.loadVideo('video/video13.mp4');
            this.assets.image7 = await this.loadImage('image/image7.png');
            this.assets.video14 = await this.loadVideo('video/video14.mp4');
            this.assets.video15 = await this.loadVideo('video/video15.mp4');
            this.assets.image8 = await this.loadImage('image/image8.png');
            this.assets.video16 = await this.loadVideo('video/video16.mp4');
            this.assets.video17 = await this.loadVideo('video/video17.mp4');
            this.assets.image9 = await this.loadImage('image/image9.png');
            this.assets.video18 = await this.loadVideo('video/video18.mp4');
            this.assets.video19 = await this.loadVideo('video/video19.mp4');
            this.assets.video20 = await this.loadVideo('video/video20.mp4');
            this.assets.image10 = await this.loadImage('image/image10.png');
            this.assets.video21 = await this.loadVideo('video/video21.mp4');
            this.assets.video22 = await this.loadVideo('video/video22.mp4');
            this.assets.video23 = await this.loadVideo('video/video23.mp4');
            this.assets.image11 = await this.loadImage('image/image11.png');
            this.assets.video24 = await this.loadVideo('video/video24.mp4');
            this.assets.video25 = await this.loadVideo('video/video25.mp4');
            this.assets.image12 = await this.loadImage('image/image12.png');
            this.assets.video26 = await this.loadVideo('video/video26.mp4');
            this.assets.video27 = await this.loadVideo('video/video27.mp4');
            this.assets.video28 = await this.loadVideo('video/video28.mp4');
            this.assets.video29 = await this.loadVideo('video/video29.mp4');
            this.assets.image13 = await this.loadImage('image/image13.png');
            this.assets.video30 = await this.loadVideo('video/video30.mp4');
            this.assets.video31 = await this.loadVideo('video/video31.mp4');
            this.assets.video32 = await this.loadVideo('video/video32.mp4');
            this.assets.image14 = await this.loadImage('image/image14.png');
            this.assets.video33 = await this.loadVideo('video/video33.mp4');
            this.assets.video34 = await this.loadVideo('video/video34.mp4');
            // image15 may be missing — use safe fallback
            try {
                this.assets.image15 = await this.loadImage('image/image15.png');
            } catch (e) {
                console.warn('image15 not found, falling back to image14 as background for video35');
                this.assets.image15 = this.assets.image14;
            }
            this.assets.video35 = await this.loadVideo('video/video35.mp4');
            this.assets.video36 = await this.loadVideo('video/video36.mp4');
            
            // Load audio (not critical for game operation)
            try {
                this.assets.audio1 = await this.loadAudio('audio/audio1.mp3');
            } catch (audioError) {
                console.warn('Audio not loaded, game will continue without sound:', audioError);
                this.assets.audio1 = null;
            }
            
            // Mark load scheduling finished
            this.loadingCallsFinished = true;
            // Mark assets as ready
            this.assetsReady = true;
            this.isLoading = false;
            
            // Show "click anywhere to start" message
            this.showClickToStart();
            
        } catch (error) {
            console.error('Resource loading error:', error);
            // On error, still allow game to start if video1 is loaded
            if (this.assets.video1 && this.assets.image1) {
                this.assetsReady = true;
                this.isLoading = false;
                this.showClickToStart();
            }
        }
    }
    
    loadVideoWithoutCounting(src) {
        return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.src = src;
            // Enable looping for video1, video3, video5, video7, video9, video11, video13, video15, video17, video20, video23, video25, video29, video32 and video35
            const shouldLoop = src.includes('video1') || src.includes('video3') || src.includes('video5') || src.includes('video7') || src.includes('video9') || src.includes('video11') || src.includes('video13') || src.includes('video15') || src.includes('video17') || src.includes('video20') || src.includes('video23') || src.includes('video25') || src.includes('video29') || src.includes('video32') || src.includes('video35');
            video.loop = shouldLoop;
            video.muted = true;
            video.preload = 'auto';
            
            video.addEventListener('canplaythrough', () => {
                console.log(`Video fully loaded: ${src}`);
                resolve(video);
            });
            
            video.addEventListener('error', () => {
                reject(new Error(`Failed to load video: ${src}`));
            });
            
            video.load();
        });
    }
    
    loadImageWithoutCounting(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            
            img.addEventListener('load', () => {
                console.log(`Image loaded: ${src}`);
                resolve(img);
            });
            
            img.addEventListener('error', () => {
                reject(new Error(`Failed to load image: ${src}`));
            });
        });
    }
    
    loadVideo(src) {
        return new Promise((resolve, reject) => {
            // Count asset for progress
            this.totalAssets += 1;
            const video = document.createElement('video');
            video.src = src;
            // Enable looping for video1, video3, video5, video7, video9, video11, video13, video15, video17, video20, video23, video25, video29, video32 and video35
            const shouldLoop = src.includes('video1') || src.includes('video3') || src.includes('video5') || src.includes('video7') || src.includes('video9') || src.includes('video11') || src.includes('video13') || src.includes('video15') || src.includes('video17') || src.includes('video20') || src.includes('video23') || src.includes('video25') || src.includes('video29') || src.includes('video32') || src.includes('video35');
            video.loop = shouldLoop;
            video.muted = true;
            video.preload = 'auto';
            
            video.addEventListener('canplaythrough', () => {
                console.log(`Video fully loaded: ${src}`);
                this.loadedAssets += 1;
                this.updateLoadingProgress();
                resolve(video);
            });
            
            video.addEventListener('error', () => {
                this.loadedAssets += 1; // still advance progress on error
                this.updateLoadingProgress();
                reject(new Error(`Failed to load video: ${src}`));
            });
            
            video.load();
        });
    }
    
    loadImage(src) {
        return new Promise((resolve, reject) => {
            // Count asset for progress
            this.totalAssets += 1;
            const img = new Image();
            img.src = src;
            
            img.addEventListener('load', () => {
                console.log(`Image loaded: ${src}`);
                this.loadedAssets += 1;
                this.updateLoadingProgress();
                resolve(img);
            });
            
            img.addEventListener('error', () => {
                this.loadedAssets += 1;
                this.updateLoadingProgress();
                reject(new Error(`Failed to load image: ${src}`));
            });
        });
    }

	async triggerDownload(path, filename) {
		try {
			const response = await fetch(path, { cache: 'no-cache' });
			if (!response.ok) {
				throw new Error(`Failed to fetch file: ${response.status}`);
			}
			const blob = await response.blob();
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = filename || 'download';
			link.style.display = 'none';
			document.body.appendChild(link);
			link.click();
			setTimeout(() => {
				URL.revokeObjectURL(url);
				document.body.removeChild(link);
			}, 0);
		} catch (error) {
			console.error('Download error:', error);
		}
	}
    
    loadAudio(src) {
        return new Promise((resolve, reject) => {
            console.log(`Loading audio: ${src}`);
            this.totalAssets += 1;
            const audio = new Audio(src);
            audio.loop = true;
            audio.preload = 'auto';
            audio.volume = 0.7; // Set volume
            
            // Add all possible events for debugging
            audio.addEventListener('loadstart', () => console.log('Audio: loading started'));
            audio.addEventListener('loadedmetadata', () => console.log('Audio: metadata loaded'));
            audio.addEventListener('loadeddata', () => console.log('Audio: data loaded'));
            audio.addEventListener('canplay', () => console.log('Audio: can play'));
            let settled = false;
            const settleOk = () => {
                if (settled) return; settled = true;
                console.log('Audio loaded successfully and ready to play');
                this.loadedAssets += 1;
                this.updateLoadingProgress();
                resolve(audio);
            };
            const settleErr = (e) => {
                if (settled) return; settled = true;
                console.error('Audio loading error:', e);
                console.error('Error details:', audio.error);
                this.loadedAssets += 1;
                this.updateLoadingProgress();
                reject(new Error(`Failed to load audio: ${src}`));
            };
            audio.addEventListener('canplaythrough', settleOk, { once: true });
            audio.addEventListener('loadeddata', settleOk, { once: true });
            audio.addEventListener('error', settleErr, { once: true });
            // Fallback timeout in case events don't fire due to browser policies
            setTimeout(() => {
                if (!settled) settleOk();
            }, 3000);
            
            // Force load
            audio.load();
        });
    }
    
    startGame() {
        console.log('Starting game...');
        
        // Ensure we're in the correct initial state
        this.currentLocation = 'video1';
        this.isTransitioning = false;
        
        // Start first video
        console.log('Starting video1...');
        if (this.assets.video1) {
            this.assets.video1.play().catch(err => {
                console.error('Error playing video1:', err);
            });
        }
        this.maybeShowIntroOverlay();
        
        // Game loop is already started in loadAssets()
    }

    updateLoadingProgress() {
        if (!this.loadingPercent) return;
        if (this.totalAssets === 0) return;
        let percent = Math.max(0, Math.min(100, Math.floor((this.loadedAssets / this.totalAssets) * 100)));
        if (!this.loadingCallsFinished) {
            percent = Math.min(percent, 99);
        }
        this.loadingPercent.textContent = `${percent}%`;
    }
    
    showClickToStart() {
        // Hide loading progress
        if (this.loadingProgress) {
            this.loadingProgress.style.display = 'none';
        }
        // Show click to start message
        if (this.clickToStart) {
            this.clickToStart.textContent = 'click anywhere to start';
            this.clickToStart.style.display = 'block';
        }
        if (this.introOverlay) {
            this.introOverlay.classList.add('clickable');
        }
    }
    
    hideIntroAndStart() {
        if (this.introOverlay) {
            this.introOverlay.style.display = 'none';
        }
        // Game is already started (video1 is playing)
        // If we're on video1, start the transition immediately
        if (this.currentLocation === 'video1' && !this.isTransitioning) {
            this.startTransition();
        }
    }

    maybeShowIntroOverlay() {
        if (this.introShown) return;
        if (this.currentLocation !== 'video1') return;
        const overlay = document.createElement('div');
        overlay.id = 'introOverlay';
        // Fullscreen layer so click anywhere works
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.right = '0';
        overlay.style.bottom = '0';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '2000';
        overlay.style.pointerEvents = 'auto';

        // Inner container with text and styles
        const content = document.createElement('div');
        content.style.color = '#FFFFFF';
        content.style.fontSize = '16px';
        content.style.lineHeight = '1.2';
        content.style.textAlign = 'left';

        // Build content as nodes so we can animate the header
        const header = document.createElement('div');
        const staticPrefix = 'genius loci ';
        const animatedFinal = '[tower]';
        const headerTextFinal = staticPrefix + animatedFinal;
        // Build prefix and animated span
        const spanPrefix = document.createElement('span');
        spanPrefix.textContent = staticPrefix;
        const spanAnimated = document.createElement('span');
        spanAnimated.textContent = animatedFinal;
        header.appendChild(spanPrefix);
        header.appendChild(spanAnimated);
        // Prevent layout jitter during scramble
        header.style.fontFamily = 'Arial, Helvetica, sans-serif';
        header.style.whiteSpace = 'pre';
        header.style.display = 'inline-block';
        header.style.width = headerTextFinal.length + 'ch';

        const line2 = document.createElement('div');
        line2.style.marginBottom = '2em';
        line2.textContent = 'access granted';

        const line3 = document.createElement('div');
        line3.textContent = '> interact with paths';

        const line4 = document.createElement('div');
        line4.textContent = '> make your choice';

        const line5 = document.createElement('div');
        line5.style.marginBottom = '2em';
        line5.textContent = '> return and repeat';

        const footer = document.createElement('div');
        footer.style.color = '#15FF00';
        footer.textContent = 'click anywhere to start';

        content.appendChild(header);
        content.appendChild(line2);
        content.appendChild(line3);
        content.appendChild(line4);
        content.appendChild(line5);
        content.appendChild(footer);

        overlay.appendChild(content);

        // Header scramble animation (~2s)
        const scrambleDurationMs = 1000;
        const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789[]{}()+-/*=<>!?@#$%^&*';
        const startTime = performance.now();
        let rafId = 0;
        let stopped = false;

        const scramble = () => {
            if (stopped) return;
            const now = performance.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / scrambleDurationMs, 1);
            const revealCount = Math.floor(progress * animatedFinal.length);
            let out = '';
            for (let i = 0; i < animatedFinal.length; i++) {
                if (i < revealCount) {
                    out += animatedFinal[i];
                } else {
                    const original = animatedFinal[i];
                    if (original === ' ') {
                        out += ' ';
                    } else {
                        out += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                    }
                }
            }
            // Update only animated segment
            spanAnimated.textContent = out;
            if (progress < 1) {
                rafId = requestAnimationFrame(scramble);
            } else {
                spanAnimated.textContent = animatedFinal;
            }
        };
        rafId = requestAnimationFrame(scramble);
        const clickHandler = (e) => {
            // Remove overlay and proxy click to canvas
            overlay.removeEventListener('click', clickHandler);
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
            this.introShown = true;
            // Stop scramble animation if running
            stopped = true;
            if (rafId) cancelAnimationFrame(rafId);
            // Proxy original click coordinates
            const proxy = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                clientX: e.clientX,
                clientY: e.clientY,
                view: window
            });
            this.canvas.dispatchEvent(proxy);
        };
        overlay.addEventListener('click', clickHandler);
        document.body.appendChild(overlay);
    }
    
    setupEventListeners() {
        this.canvas.addEventListener('click', (e) => {
            if (this.isTransitioning) return;
            
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.handleClick(x, y);
        });
    }
    
    handleClick(x, y) {
        // Prevent clicks while loading or during any transitions
        if (this.isLoading || this.isTransitioning || this.preparingVideo4 || this.preparingVideo6 || this.preparingVideo8 || this.preparingVideo10 || this.preparingVideo12 || this.preparingVideo14 || this.preparingVideo16 || this.preparingVideo18 || this.preparingVideo19 || this.preparingVideo21 || this.preparingVideo22 || this.preparingVideo24 || this.preparingVideo26 || this.preparingVideo27 || this.preparingVideo28 || this.preparingVideo30 || this.preparingVideo31 || this.preparingVideo33 || this.preparingVideo34 || this.preparingVideo36) {
            console.log('Click blocked - transition in progress');
            return;
        }
        
        // Debug: log current states
        console.log('Click detected - current states:');
        console.log('  currentLocation:', this.currentLocation);
        console.log('  isTransitioning:', this.isTransitioning);
        console.log('  showingVideo35:', this.showingVideo35);
        console.log('  showingVideo36:', this.showingVideo36);
        console.log('  preparingVideo36:', this.preparingVideo36);
        console.log('  showingVideo34:', this.showingVideo34);
        console.log('  preparingVideo34:', this.preparingVideo34);
        
        if (this.currentLocation === 'video1') {
            // Transition from video1 to video3 via video2
            this.startTransition();
        } else if (this.showingVideo35 && !this.showingVideo36 && !this.preparingVideo36) {
            // Click on video35 — transition video36 and return to start (like video1)
            console.log('Video35 clicked - starting video36 transition back to start');
            this.startVideo36Transition();
        } else if (this.showingVideo5 && !this.showingVideo6 && !this.preparingVideo6 && !this.showingVideo7) {
            // Click on video5 - start video6
            console.log('Clicked on video5 - starting video6');
            this.startVideo6Transition();
        } else if (this.showingVideo7 && !this.showingVideo8 && !this.preparingVideo8 && !this.showingVideo9 && !this.showingVideo10 && !this.preparingVideo10 && !this.showingVideo11) {
            // Click on video7 - two vertical zones
            const canvasWidth = this.canvas.width;
            const leftHalf = canvasWidth / 2;
            
            if (x < leftHalf) {
                // Left zone of video7
                console.log('Video7 left zone clicked - future scenario 1');
                this.startVideo7Scenario1();
            } else {
                // Right zone of video7
                console.log('Video7 right zone clicked - future scenario 2');
                this.startVideo7Scenario2();
            }
        } else if (this.currentLocation === 'video3' && !this.showingVideo4 && !this.preparingVideo4 && !this.showingVideo5 && !this.showingVideo12 && !this.preparingVideo12 && !this.showingVideo13 && !this.showingVideo32 && !this.showingVideo31 && !this.preparingVideo31) {
            // Determine which zone was clicked
            const canvasWidth = this.canvas.width;
            const leftHalf = canvasWidth / 2;
            
            if (x < leftHalf) {
                // Left half - scenario 1
                console.log('Scenario 1 selected (left half)');
                this.startScenario1();
            } else {
                // Right half - scenario 2
                console.log('Scenario 2 selected (right half)');
                this.startScenario2();
            }
        } else if (this.showingVideo11 && !this.showingVideo14 && !this.preparingVideo14 && !this.showingVideo15) {
            // Click on video11 - start video14
            console.log('Video11 clicked - starting video14 transition');
            this.startVideo14Transition();
        } else if (this.showingVideo15 && !this.showingVideo18 && !this.preparingVideo18 && !this.showingVideo17 && !this.showingVideo19 && !this.preparingVideo19 && !this.showingVideo20) {
            // Click on video15 - two vertical zones
            const canvasWidth = this.canvas.width;
            const leftHalf = canvasWidth / 2;
            
            if (x < leftHalf) {
                // Left zone of video15
                console.log('Video15 left zone clicked - starting video18 transition');
                this.startVideo18Transition();
            } else {
                // Right zone of video15
                console.log('Video15 right zone clicked - starting video19 transition');
                this.startVideo19Transition();
            }
        } else if (this.showingVideo13 && !this.showingVideo12 && !this.preparingVideo12 && !this.showingVideo16 && !this.preparingVideo16 && !this.showingVideo17 && !this.showingVideo28 && !this.preparingVideo28 && !this.showingVideo29) {
            // Click on video13 - two vertical zones
            const canvasWidth = this.canvas.width;
            const leftHalf = canvasWidth / 2;
            
            if (x < leftHalf) {
                // Left zone of video13 - start video28
                console.log('Video13 left zone clicked - starting video28 transition');
                this.startVideo28Transition();
            } else {
                // Right zone of video13
                console.log('Video13 right zone clicked - starting video16 transition');
                this.startVideo16Transition();
            }
        } else if (this.showingVideo20 && !this.showingVideo21 && !this.preparingVideo21) {
            // Click on video20 - return to start via video21
            console.log('Video20 clicked - starting video21 transition back to start');
            this.startVideo21Transition();
        } else if (this.showingVideo9 && !this.showingVideo22 && !this.preparingVideo22 && !this.showingVideo23) {
            // Click on video9 - start video22
            console.log('Video9 clicked - starting video22 transition');
            this.startVideo22Transition();
        } else if (this.showingVideo17 && !this.showingVideo24 && !this.preparingVideo24 && !this.showingVideo25) {
            // Click on video17 - start video24
            console.log('Video17 clicked - starting video24 transition');
            this.startVideo24Transition();
        } else if (this.showingVideo25 && !this.showingVideo26 && !this.preparingVideo26) {
            // Click on video25 - two vertical zones
            const canvasWidth = this.canvas.width;
            const leftHalf = canvasWidth / 2;
            
            if (x < leftHalf) {
                // Left zone of video25 -> video34 -> video35 (loop)
                console.log('Video25 left zone clicked - starting video34 transition');
                this.startVideo34Transition();
            } else {
                // Right zone of video25 - return to start via video26
                console.log('Video25 right zone clicked - starting video26 transition back to start');
                this.startVideo26Transition();
            }
        } else if (this.showingVideo23 && !this.showingVideo27 && !this.preparingVideo27 && !this.showingVideo31 && !this.preparingVideo31 && !this.showingVideo32) {
            // Click on video23 - two vertical zones
            const canvasWidth = this.canvas.width;
            const leftHalf = canvasWidth / 2;
            
            if (x < leftHalf) {
                // Left zone of video23 - return to start via video27
                console.log('Video23 left zone clicked - starting video27 transition back to start');
                this.startVideo27Transition();
            } else {
                // Right zone of video23 - start video31
                console.log('Video23 right zone clicked - starting video31 transition');
                this.startVideo31Transition();
            }
		} else if (this.showingVideo29 && !this.showingVideo30 && !this.preparingVideo30) {
			// Click on video29 - return to start via video30 and download map
			console.log('Video29 clicked - starting video30 transition back to start');
			// Open map in new tab
			window.open('gif/map.gif', '_blank', 'noopener,noreferrer');
			this.startVideo30Transition();
        } else if (this.showingVideo32 && !this.showingVideo33 && !this.preparingVideo33) {
            // Click on video32 - start video33 to return to start
            console.log('Video32 clicked - starting video33 transition back to start');
            this.startVideo33Transition();
        } else {
            console.log('No matching click condition found for current states');
        }
    }
    
    startTransition() {
        console.log('Starting transition...');
        
        // Start music on first click (if not already started)
        if (this.assets.audio1 && this.assets.audio1.paused) {
            console.log('Starting music on first click...');
            this.assets.audio1.play().catch(e => {
                console.log('Failed to start music:', e);
            });
        }
        
        // Prepare video2 before transition
        this.assets.video2.currentTime = 0;
        
        // Wait for video2 to be ready, then transition
        const startVideo2 = () => {
            this.isTransitioning = true;
            this.assets.video1.pause();
            this.assets.video2.play();
        };
        
        if (this.assets.video2.readyState >= 2) {
            startVideo2();
        } else {
            this.assets.video2.addEventListener('canplay', startVideo2, { once: true });
        }
        
        // After video2 ends, move to video3 (only add listener once)
        if (!this.assets.video2.hasEndedListener) {
            this.assets.video2.addEventListener('ended', () => {
                console.log('Transition completed, moving to video3');
                this.currentLocation = 'video3';
                this.isTransitioning = false;
                // Start looped video3
                this.assets.video3.play();
                // Reset flag so handler can be added again in next cycle
                this.assets.video2.hasEndedListener = false;
            }, { once: true });
            this.assets.video2.hasEndedListener = true;
        }
    }
    
    startScenario1() {
        console.log('Starting scenario 1 - playing video4...');
        
        // Pause video3 but keep showing it until video4 is ready
        this.assets.video3.pause();
        this.assets.video4.currentTime = 0;
        this.preparingVideo4 = true;  // Flag to show background while preparing
        
        // Wait for video4 to be ready, then start it
        const startVideo4 = () => {
            this.preparingVideo4 = false;
            this.showingVideo4 = true;
            this.assets.video4.play();
        };
        
        if (this.assets.video4.readyState >= 2) {
            startVideo4();
        } else {
            this.assets.video4.addEventListener('canplay', startVideo4, { once: true });
        }
        
        // When video4 ends, transition to video5 (only add listener once)
        if (!this.assets.video4.hasEndedListener) {
            this.assets.video4.addEventListener('ended', () => {
                console.log('Video4 ended, transitioning to video5');
                this.showingVideo4 = false;
                this.showingVideo32 = false;
                this.showingVideo31 = false;
                this.showingVideo5 = true;
                
                // Start video5 with image3 background
                this.assets.video5.currentTime = 0;
                this.assets.video5.play();
                // Reset flag so handler can be added again in next cycle
                this.assets.video4.hasEndedListener = false;
            }, { once: true });
            this.assets.video4.hasEndedListener = true;
        }
    }
    
    startScenario2() {
        console.log('Starting scenario 2 - playing video12...');
        
        // Pause video3 but keep showing it until video12 is ready
        this.assets.video3.pause();
        this.assets.video12.currentTime = 0;
        this.preparingVideo12 = true;  // Flag to show background while preparing
        
        // Make sure video12 is not looping
        this.assets.video12.loop = false;
        
        // Wait for video12 to be ready, then start it
        const startVideo12 = () => {
            this.preparingVideo12 = false;
            this.showingVideo12 = true;
            this.assets.video12.play();
        };
        
        if (this.assets.video12.readyState >= 2) {
            startVideo12();
        } else {
            this.assets.video12.addEventListener('canplay', startVideo12, { once: true });
        }
        
        // When video12 ends, transition to video13 (only add listener once)
        if (!this.assets.video12.hasEndedListener) {
            this.assets.video12.addEventListener('ended', () => {
                console.log('Video12 ended, transitioning to video13');
                this.showingVideo12 = false;
                this.showingVideo13 = true;
                
                // Start video13 with image7 background
                this.assets.video13.currentTime = 0;
                this.assets.video13.play();
                // Reset flag so handler can be added again in next cycle
                this.assets.video12.hasEndedListener = false;
            }, { once: true });
            this.assets.video12.hasEndedListener = true;
        }
    }
    
    startVideo6Transition() {
        console.log('Starting video6 transition...');
        
        // Pause video5 but keep showing it until video6 is ready
        this.assets.video5.pause();
        this.assets.video6.currentTime = 0;
        this.preparingVideo6 = true;  // Flag to show background while preparing
        
        // Wait for video6 to be ready, then start it
        const startVideo6 = () => {
            this.preparingVideo6 = false;
            this.showingVideo6 = true;
            this.assets.video6.play();
        };
        
        if (this.assets.video6.readyState >= 2) {
            startVideo6();
        } else {
            this.assets.video6.addEventListener('canplay', startVideo6, { once: true });
        }
        
        // When video6 ends, transition to video7 (only add listener once)
        if (!this.assets.video6.hasEndedListener) {
            this.assets.video6.addEventListener('ended', () => {
                console.log('Video6 ended, transitioning to video7');
                this.showingVideo6 = false;
                this.showingVideo7 = true;
                
                // Start video7 with image4 background
                this.assets.video7.currentTime = 0;
                this.assets.video7.play();
                // Reset flag so handler can be added again in next cycle
                this.assets.video6.hasEndedListener = false;
            }, { once: true });
            this.assets.video6.hasEndedListener = true;
        }
    }
    
    startVideo7Scenario1() {
        console.log('Starting video7 scenario 1 - left zone, playing video10...');
        
        // Pause video7 but keep showing it until video10 is ready
        this.assets.video7.pause();
        this.assets.video10.currentTime = 0;
        this.preparingVideo10 = true;  // Flag to show background while preparing
        
        // Make sure video10 is not looping
        this.assets.video10.loop = false;
        
        // Wait for video10 to be ready, then start it
        const startVideo10 = () => {
            this.preparingVideo10 = false;
            this.showingVideo10 = true;
            this.assets.video10.play();
        };
        
        if (this.assets.video10.readyState >= 2) {
            startVideo10();
        } else {
            this.assets.video10.addEventListener('canplay', startVideo10, { once: true });
        }
        
        // When video10 ends, transition to video11 (only add listener once)
        if (!this.assets.video10.hasEndedListener) {
            this.assets.video10.addEventListener('ended', () => {
                console.log('Video10 ended, transitioning to video11');
                this.showingVideo10 = false;
                this.showingVideo11 = true;
                
                // Start video11 with image6 background
                this.assets.video11.currentTime = 0;
                console.log('Video11 ready state:', this.assets.video11.readyState);
                
                // Wait for video11 to be ready before playing
                const startVideo11 = () => {
                    console.log('Starting video11...');
                    this.assets.video11.play();
                };
                
                if (this.assets.video11.readyState >= 2) {
                    startVideo11();
                } else {
                    console.log('Video11 not ready, waiting...');
                    this.assets.video11.addEventListener('canplay', startVideo11, { once: true });
                }
                // Reset flag so handler can be added again in next cycle
                this.assets.video10.hasEndedListener = false;
            }, { once: true });
            this.assets.video10.hasEndedListener = true;
        }
    }
    
    startVideo7Scenario2() {
        console.log('Starting video7 scenario 2 - right zone, playing video8...');
        
        // Pause video7 but keep showing it until video8 is ready
        this.assets.video7.pause();
        this.assets.video8.currentTime = 0;
        this.preparingVideo8 = true;  // Flag to show background while preparing
        
        // Make sure video8 is not looping
        this.assets.video8.loop = false;
        
        // Wait for video8 to be ready, then start it
        const startVideo8 = () => {
            this.preparingVideo8 = false;
            this.showingVideo8 = true;
            this.assets.video8.play();
        };
        
        if (this.assets.video8.readyState >= 2) {
            startVideo8();
        } else {
            this.assets.video8.addEventListener('canplay', startVideo8, { once: true });
        }
        
        // When video8 ends, transition to video9 (only add listener once)
        if (!this.assets.video8.hasEndedListener) {
            this.assets.video8.addEventListener('ended', () => {
                console.log('Video8 ended, transitioning to video9');
                this.showingVideo8 = false;
                this.showingVideo9 = true;
                
                // Start video9 with image5 background
                this.assets.video9.currentTime = 0;
                this.assets.video9.play();
                // Reset flag so handler can be added again in next cycle
                this.assets.video8.hasEndedListener = false;
            }, { once: true });
            this.assets.video8.hasEndedListener = true;
        }
    }
    
    startVideo28Transition() {
        console.log('Starting video28 transition...');
        
        // Pause video13 but keep showing it until video28 is ready
        this.assets.video13.pause();
        this.assets.video28.currentTime = 0;
        this.preparingVideo28 = true;  // Flag to show background while preparing
        
        // Make sure video28 is not looping
        this.assets.video28.loop = false;
        
        // Wait for video28 to be ready, then start it
        const startVideo28 = () => {
            this.preparingVideo28 = false;
            this.showingVideo28 = true;
            this.assets.video28.play();
        };
        
        if (this.assets.video28.readyState >= 2) {
            startVideo28();
        } else {
            this.assets.video28.addEventListener('canplay', startVideo28, { once: true });
        }
        
        // When video28 ends, transition to video29 (only add listener once)
        if (!this.assets.video28.hasEndedListener) {
            this.assets.video28.addEventListener('ended', () => {
                console.log('Video28 ended, transitioning to video29');
                this.showingVideo28 = false;
                this.showingVideo29 = true;
                
                // Start video29 with image13 background
                this.assets.video29.currentTime = 0;
                this.assets.video29.loop = true;  // Ensure video29 loops
                this.assets.video29.play();
                
                // Reset flag so handler can be added again in next cycle
                this.assets.video28.hasEndedListener = false;
            }, { once: true });
            this.assets.video28.hasEndedListener = true;
        }
    }
    
    startVideo30Transition() {
        console.log('Starting video30 transition - returning to start...');
        
        // Pause video29 but keep showing it until video30 is ready
        this.assets.video29.pause();
        this.assets.video30.currentTime = 0;
        this.preparingVideo30 = true;  // Flag to show background while preparing
        
        // Make sure video30 is not looping
        this.assets.video30.loop = false;
        
        // Wait for video30 to be ready, then start it
        const startVideo30 = () => {
            this.preparingVideo30 = false;
            this.showingVideo30 = true;
            this.assets.video30.play();
        };
        
        if (this.assets.video30.readyState >= 2) {
            startVideo30();
        } else {
            this.assets.video30.addEventListener('canplay', startVideo30, { once: true });
        }
        
        // When video30 ends, return to video1
        if (!this.assets.video30.hasEndedListener) {
            this.assets.video30.addEventListener('ended', () => {
                console.log('Video30 ended, returning to video1 (start)');
                
                // Reset all showing states
                this.showingVideo30 = false;
                this.showingVideo29 = false;
                this.showingVideo28 = false;
                this.showingVideo27 = false;
                this.showingVideo26 = false;
                this.showingVideo25 = false;
                this.showingVideo24 = false;
                this.showingVideo23 = false;
                this.showingVideo22 = false;
                this.showingVideo21 = false;
                this.showingVideo20 = false;
                this.showingVideo19 = false;
                this.showingVideo18 = false;
                this.showingVideo17 = false;
                this.showingVideo16 = false;
                this.showingVideo15 = false;
                this.showingVideo14 = false;
                this.showingVideo13 = false;
                this.showingVideo12 = false;
                this.showingVideo11 = false;
                this.showingVideo10 = false;
                this.showingVideo9 = false;
                this.showingVideo8 = false;
                this.showingVideo7 = false;
                this.showingVideo6 = false;
                this.showingVideo5 = false;
                this.showingVideo4 = false;
                
                // Reset all preparing states
                this.preparingVideo30 = false;
                this.preparingVideo28 = false;
                this.preparingVideo27 = false;
                this.preparingVideo26 = false;
                this.preparingVideo24 = false;
                this.preparingVideo22 = false;
                this.preparingVideo21 = false;
                this.preparingVideo19 = false;
                this.preparingVideo18 = false;
                this.preparingVideo16 = false;
                this.preparingVideo14 = false;
                this.preparingVideo12 = false;
                this.preparingVideo10 = false;
                this.preparingVideo8 = false;
                this.preparingVideo6 = false;
                this.preparingVideo4 = false;
                
                // Pause all videos to ensure clean state
                this.assets.video2.pause();
                this.assets.video3.pause();
                this.assets.video4.pause();
                this.assets.video5.pause();
                this.assets.video6.pause();
                this.assets.video7.pause();
                this.assets.video8.pause();
                this.assets.video9.pause();
                this.assets.video10.pause();
                this.assets.video11.pause();
                this.assets.video12.pause();
                this.assets.video13.pause();
                this.assets.video14.pause();
                this.assets.video15.pause();
                this.assets.video16.pause();
                this.assets.video17.pause();
                this.assets.video18.pause();
                this.assets.video19.pause();
                this.assets.video20.pause();
                this.assets.video21.pause();
                this.assets.video22.pause();
                this.assets.video23.pause();
                this.assets.video24.pause();
                this.assets.video25.pause();
                this.assets.video26.pause();
                this.assets.video27.pause();
                this.assets.video28.pause();
                this.assets.video29.pause();
                this.assets.video30.pause();
                this.assets.video31.pause();
                this.assets.video32.pause();
                this.assets.video33.pause();
                
                // Reset currentTime for all videos
                this.assets.video2.currentTime = 0;
                this.assets.video3.currentTime = 0;
                this.assets.video4.currentTime = 0;
                this.assets.video5.currentTime = 0;
                this.assets.video6.currentTime = 0;
                this.assets.video7.currentTime = 0;
                this.assets.video8.currentTime = 0;
                this.assets.video9.currentTime = 0;
                this.assets.video10.currentTime = 0;
                this.assets.video11.currentTime = 0;
                this.assets.video12.currentTime = 0;
                this.assets.video13.currentTime = 0;
                this.assets.video14.currentTime = 0;
                this.assets.video15.currentTime = 0;
                this.assets.video16.currentTime = 0;
                this.assets.video17.currentTime = 0;
                this.assets.video18.currentTime = 0;
                this.assets.video19.currentTime = 0;
                this.assets.video20.currentTime = 0;
                this.assets.video21.currentTime = 0;
                this.assets.video22.currentTime = 0;
                this.assets.video23.currentTime = 0;
                this.assets.video24.currentTime = 0;
                this.assets.video25.currentTime = 0;
                this.assets.video26.currentTime = 0;
                this.assets.video27.currentTime = 0;
                this.assets.video28.currentTime = 0;
                this.assets.video29.currentTime = 0;
                this.assets.video30.currentTime = 0;
                this.assets.video31.currentTime = 0;
                this.assets.video32.currentTime = 0;
                this.assets.video33.currentTime = 0;
                
                // Return to initial location
                this.currentLocation = 'video1';
                this.isTransitioning = false;
                
                // Start video1 from beginning
                this.assets.video1.currentTime = 0;
                this.assets.video1.play();
                
                // Reset flag so handler can be added again in next cycle
                this.assets.video30.hasEndedListener = false;
            }, { once: true });
            this.assets.video30.hasEndedListener = true;
        }
    }
    
    startVideo31Transition() {
        console.log('Starting video31 transition...');
        
        // Pause video23 but keep showing it until video31 is ready
        this.assets.video23.pause();
        this.assets.video31.currentTime = 0;
        this.preparingVideo31 = true;  // Flag to show background while preparing
        
        // Make sure video31 is not looping
        this.assets.video31.loop = false;
        
        // Wait for video31 to be ready, then start it
        const startVideo31 = () => {
            this.preparingVideo31 = false;
            this.showingVideo31 = true;
            this.assets.video31.play();
        };
        
        if (this.assets.video31.readyState >= 2) {
            startVideo31();
        } else {
            this.assets.video31.addEventListener('canplay', startVideo31, { once: true });
        }
        
        // When video31 ends, transition to video32 (only add listener once)
        if (!this.assets.video31.hasEndedListener) {
            this.assets.video31.addEventListener('ended', () => {
                console.log('Video31 ended, transitioning to video32');
                this.showingVideo31 = false;
                this.showingVideo32 = true;
                
                // Start video32 with image14 background
                this.assets.video32.currentTime = 0;
                this.assets.video32.loop = true;  // Ensure video32 loops
                this.assets.video32.play();
                // Reset flag so handler can be added again in next cycle
                this.assets.video31.hasEndedListener = false;
            }, { once: true });
            this.assets.video31.hasEndedListener = true;
        }
    }
    
    startVideo33Transition() {
        console.log('Starting video33 transition - returning to start...');
        
        // Pause video32 but keep showing it until video33 is ready
        this.assets.video32.pause();
        this.assets.video33.currentTime = 0;
        this.preparingVideo33 = true;  // Flag to show background while preparing
        
        // Make sure video33 is not looping
        this.assets.video33.loop = false;
        
        // Wait for video33 to be ready, then start it
        const startVideo33 = () => {
            this.preparingVideo33 = false;
            this.showingVideo33 = true;
            this.assets.video33.play();
        };
        
        if (this.assets.video33.readyState >= 2) {
            startVideo33();
        } else {
            this.assets.video33.addEventListener('canplay', startVideo33, { once: true });
        }
        
        // When video33 ends, return to video1 (only add listener once)
        if (!this.assets.video33.hasEndedListener) {
            this.assets.video33.addEventListener('ended', () => {
                console.log('Video33 ended, returning to video1 (start)');
                
                // Reset all showing states
                this.showingVideo33 = false;
                this.showingVideo32 = false;
                this.showingVideo31 = false;
                this.showingVideo30 = false;
                this.showingVideo29 = false;
                this.showingVideo28 = false;
                this.showingVideo27 = false;
                this.showingVideo26 = false;
                this.showingVideo25 = false;
                this.showingVideo24 = false;
                this.showingVideo23 = false;
                this.showingVideo22 = false;
                this.showingVideo21 = false;
                this.showingVideo20 = false;
                this.showingVideo19 = false;
                this.showingVideo18 = false;
                this.showingVideo17 = false;
                this.showingVideo16 = false;
                this.showingVideo15 = false;
                this.showingVideo14 = false;
                this.showingVideo13 = false;
                this.showingVideo12 = false;
                this.showingVideo11 = false;
                this.showingVideo10 = false;
                this.showingVideo9 = false;
                this.showingVideo8 = false;
                this.showingVideo7 = false;
                this.showingVideo6 = false;
                this.showingVideo5 = false;
                this.showingVideo4 = false;
                
                // Reset all preparing states
                this.preparingVideo33 = false;
                this.preparingVideo31 = false;
                this.preparingVideo30 = false;
                this.preparingVideo30 = false;
                this.preparingVideo28 = false;
                this.preparingVideo27 = false;
                this.preparingVideo26 = false;
                this.preparingVideo24 = false;
                this.preparingVideo22 = false;
                this.preparingVideo21 = false;
                this.preparingVideo19 = false;
                this.preparingVideo18 = false;
                this.preparingVideo16 = false;
                this.preparingVideo14 = false;
                this.preparingVideo12 = false;
                this.preparingVideo10 = false;
                this.preparingVideo8 = false;
                this.preparingVideo6 = false;
                this.preparingVideo4 = false;
                
                // Note: event listener flags are reset inside each handler automatically
                
                // Pause all videos to ensure clean state
                this.assets.video2.pause();
                this.assets.video3.pause();
                this.assets.video4.pause();
                this.assets.video5.pause();
                this.assets.video6.pause();
                this.assets.video7.pause();
                this.assets.video8.pause();
                this.assets.video9.pause();
                this.assets.video10.pause();
                this.assets.video11.pause();
                this.assets.video12.pause();
                this.assets.video13.pause();
                this.assets.video14.pause();
                this.assets.video15.pause();
                this.assets.video16.pause();
                this.assets.video17.pause();
                this.assets.video18.pause();
                this.assets.video19.pause();
                this.assets.video20.pause();
                this.assets.video21.pause();
                this.assets.video22.pause();
                this.assets.video23.pause();
                this.assets.video24.pause();
                this.assets.video25.pause();
                this.assets.video26.pause();
                this.assets.video27.pause();
                this.assets.video28.pause();
                this.assets.video29.pause();
                this.assets.video31.pause();
                this.assets.video30.pause();
                this.assets.video32.pause();
                this.assets.video33.pause();
                
                // Reset currentTime for all videos
                this.assets.video2.currentTime = 0;
                this.assets.video3.currentTime = 0;
                this.assets.video4.currentTime = 0;
                this.assets.video5.currentTime = 0;
                this.assets.video6.currentTime = 0;
                this.assets.video7.currentTime = 0;
                this.assets.video8.currentTime = 0;
                this.assets.video9.currentTime = 0;
                this.assets.video10.currentTime = 0;
                this.assets.video11.currentTime = 0;
                this.assets.video12.currentTime = 0;
                this.assets.video13.currentTime = 0;
                this.assets.video14.currentTime = 0;
                this.assets.video15.currentTime = 0;
                this.assets.video16.currentTime = 0;
                this.assets.video17.currentTime = 0;
                this.assets.video18.currentTime = 0;
                this.assets.video19.currentTime = 0;
                this.assets.video20.currentTime = 0;
                this.assets.video21.currentTime = 0;
                this.assets.video22.currentTime = 0;
                this.assets.video23.currentTime = 0;
                this.assets.video24.currentTime = 0;
                this.assets.video25.currentTime = 0;
                this.assets.video26.currentTime = 0;
                this.assets.video27.currentTime = 0;
                this.assets.video28.currentTime = 0;
                this.assets.video29.currentTime = 0;
                this.assets.video31.currentTime = 0;
                this.assets.video30.currentTime = 0;
                this.assets.video32.currentTime = 0;
                this.assets.video33.currentTime = 0;
                
                // Return to initial location
                this.currentLocation = 'video1';
                this.isTransitioning = false;
                
                // Start video1 from beginning
                this.assets.video1.currentTime = 0;
                this.assets.video1.play();
                
                // Reset flag so handler can be added again in next cycle (must be last)
                this.assets.video33.hasEndedListener = false;
            }, { once: true });
            this.assets.video33.hasEndedListener = true;
        }
    }
    
    startVideo35Transition() {
        console.log('Starting video35 transition - returning to start...');
        
        // Pause video34 but keep showing it until video35 is ready
        this.assets.video34.pause();
        this.assets.video35.currentTime = 0;
        this.preparingVideo35 = true;  // Flag to show background while preparing
        
        // Make sure video35 is not looping
        this.assets.video35.loop = false;
        
        // Wait for video35 to be ready, then start it
        const startVideo35 = () => {
            this.preparingVideo35 = false;
            this.showingVideo35 = true;
            this.assets.video35.play();
        };
        
        if (this.assets.video35.readyState >= 2) {
            startVideo35();
        } else {
            this.assets.video35.addEventListener('canplay', startVideo35, { once: true });
        }
        
        // When video35 ends, return to video1 (only add listener once)
        if (!this.assets.video35.hasEndedListener) {
            this.assets.video35.addEventListener('ended', () => {
                console.log('Video35 ended, returning to video1 (start)');
                
                // Reset all showing states
                this.showingVideo33 = false;
                this.showingVideo32 = false;
                this.showingVideo31 = false;
                this.showingVideo30 = false;
                this.showingVideo29 = false;
                this.showingVideo28 = false;
                this.showingVideo27 = false;
                this.showingVideo26 = false;
                this.showingVideo25 = false;
                this.showingVideo24 = false;
                this.showingVideo23 = false;
                this.showingVideo22 = false;
                this.showingVideo21 = false;
                this.showingVideo20 = false;
                this.showingVideo19 = false;
                this.showingVideo18 = false;
                this.showingVideo17 = false;
                this.showingVideo16 = false;
                this.showingVideo15 = false;
                this.showingVideo14 = false;
                this.showingVideo13 = false;
                this.showingVideo12 = false;
                this.showingVideo11 = false;
                this.showingVideo10 = false;
                this.showingVideo9 = false;
                this.showingVideo8 = false;
                this.showingVideo7 = false;
                this.showingVideo6 = false;
                this.showingVideo5 = false;
                this.showingVideo4 = false;
                
                // Reset all preparing states
                this.preparingVideo33 = false;
                this.preparingVideo31 = false;
                this.preparingVideo30 = false;
                this.preparingVideo28 = false;
                this.preparingVideo27 = false;
                this.preparingVideo26 = false;
                this.preparingVideo24 = false;
                this.preparingVideo22 = false;
                this.preparingVideo21 = false;
                this.preparingVideo19 = false;
                this.preparingVideo18 = false;
                this.preparingVideo16 = false;
                this.preparingVideo14 = false;
                this.preparingVideo12 = false;
                this.preparingVideo10 = false;
                this.preparingVideo8 = false;
                this.preparingVideo6 = false;
                this.preparingVideo4 = false;
                
                // Note: event listener flags are reset inside each handler automatically
                
                // Pause all videos to ensure clean state
                this.assets.video2.pause();
                this.assets.video3.pause();
                this.assets.video4.pause();
                this.assets.video5.pause();
                this.assets.video6.pause();
                this.assets.video7.pause();
                this.assets.video8.pause();
                this.assets.video9.pause();
                this.assets.video10.pause();
                this.assets.video11.pause();
                this.assets.video12.pause();
                this.assets.video13.pause();
                this.assets.video14.pause();
                this.assets.video15.pause();
                this.assets.video16.pause();
                this.assets.video17.pause();
                this.assets.video18.pause();
                this.assets.video19.pause();
                this.assets.video20.pause();
                this.assets.video21.pause();
                this.assets.video22.pause();
                this.assets.video23.pause();
                this.assets.video24.pause();
                this.assets.video25.pause();
                this.assets.video26.pause();
                this.assets.video27.pause();
                this.assets.video28.pause();
                this.assets.video29.pause();
                this.assets.video31.pause();
                this.assets.video30.pause();
                this.assets.video32.pause();
                this.assets.video33.pause();
                
                // Reset currentTime for all videos
                this.assets.video2.currentTime = 0;
                this.assets.video3.currentTime = 0;
                this.assets.video4.currentTime = 0;
                this.assets.video5.currentTime = 0;
                this.assets.video6.currentTime = 0;
                this.assets.video7.currentTime = 0;
                this.assets.video8.currentTime = 0;
                this.assets.video9.currentTime = 0;
                this.assets.video10.currentTime = 0;
                this.assets.video11.currentTime = 0;
                this.assets.video12.currentTime = 0;
                this.assets.video13.currentTime = 0;
                this.assets.video14.currentTime = 0;
                this.assets.video15.currentTime = 0;
                this.assets.video16.currentTime = 0;
                this.assets.video17.currentTime = 0;
                this.assets.video18.currentTime = 0;
                this.assets.video19.currentTime = 0;
                this.assets.video20.currentTime = 0;
                this.assets.video21.currentTime = 0;
                this.assets.video22.currentTime = 0;
                this.assets.video23.currentTime = 0;
                this.assets.video24.currentTime = 0;
                this.assets.video25.currentTime = 0;
                this.assets.video26.currentTime = 0;
                this.assets.video27.currentTime = 0;
                this.assets.video28.currentTime = 0;
                this.assets.video29.currentTime = 0;
                this.assets.video31.currentTime = 0;
                this.assets.video30.currentTime = 0;
                this.assets.video32.currentTime = 0;
                this.assets.video33.currentTime = 0;
                
                // Return to initial location
                this.currentLocation = 'video1';
                this.isTransitioning = false;
                
                // Start video1 from beginning
                this.assets.video1.currentTime = 0;
                this.assets.video1.play();
                
                // Reset flag so handler can be added again in next cycle (must be last)
                this.assets.video35.hasEndedListener = false;
            }, { once: true });
            this.assets.video35.hasEndedListener = true;
        }
    }
    
    startVideo13Scenario1() {
        console.log('Starting video13 scenario 1 - left zone');
        // Future scenario implementation
    }
    
    startVideo13Scenario2() {
        console.log('Starting video13 scenario 2 - right zone');
        // Future scenario implementation
    }
    
    startVideo16Transition() {
        console.log('Starting video16 transition...');
        
        // Pause video13 but keep showing it until video16 is ready
        this.assets.video13.pause();
        this.assets.video16.currentTime = 0;
        this.preparingVideo16 = true;  // Flag to show background while preparing
        
        // Make sure video16 is not looping
        this.assets.video16.loop = false;
        
        // Wait for video16 to be ready, then start it
        const startVideo16 = () => {
            this.preparingVideo16 = false;
            this.showingVideo16 = true;
            this.assets.video16.play();
        };
        
        if (this.assets.video16.readyState >= 2) {
            startVideo16();
        } else {
            this.assets.video16.addEventListener('canplay', startVideo16, { once: true });
        }
        
        // When video16 ends, transition to video17 (only add listener once)
        if (!this.assets.video16.hasEndedListener) {
            this.assets.video16.addEventListener('ended', () => {
                console.log('Video16 ended, transitioning to video17');
                this.showingVideo16 = false;
                this.showingVideo17 = true;
                
                // Start video17 with image9 background
                this.assets.video17.currentTime = 0;
                this.assets.video17.play();
                // Reset flag so handler can be added again in next cycle
                this.assets.video16.hasEndedListener = false;
            }, { once: true });
            this.assets.video16.hasEndedListener = true;
        }
    }
    
    startVideo14Transition() {
        console.log('Starting video14 transition...');
        
        // Pause video11 but keep showing it until video14 is ready
        this.assets.video11.pause();
        this.assets.video14.currentTime = 0;
        this.preparingVideo14 = true;  // Flag to show background while preparing
        
        // Make sure video14 is not looping
        this.assets.video14.loop = false;
        
        // Wait for video14 to be ready, then start it
        const startVideo14 = () => {
            this.preparingVideo14 = false;
            this.showingVideo14 = true;
            this.assets.video14.play();
        };
        
        if (this.assets.video14.readyState >= 2) {
            startVideo14();
        } else {
            this.assets.video14.addEventListener('canplay', startVideo14, { once: true });
        }
        
        // When video14 ends, transition to video15 (only add listener once)
        if (!this.assets.video14.hasEndedListener) {
            this.assets.video14.addEventListener('ended', () => {
                console.log('Video14 ended, transitioning to video15');
                this.showingVideo14 = false;
                this.showingVideo15 = true;
                
                // Start video15 with image8 background
                this.assets.video15.currentTime = 0;
                this.assets.video15.play();
                // Reset flag so handler can be added again in next cycle
                this.assets.video14.hasEndedListener = false;
            }, { once: true });
            this.assets.video14.hasEndedListener = true;
        }
    }
    
    startVideo18Transition() {
        console.log('Starting video18 transition...');
        
        // Pause video15 but keep showing it until video18 is ready
        this.assets.video15.pause();
        this.assets.video18.currentTime = 0;
        this.preparingVideo18 = true;  // Flag to show background while preparing
        
        // Make sure video18 is not looping
        this.assets.video18.loop = false;
        
        // Wait for video18 to be ready, then start it
        const startVideo18 = () => {
            this.preparingVideo18 = false;
            this.showingVideo18 = true;
            this.assets.video18.play();
        };
        
        if (this.assets.video18.readyState >= 2) {
            startVideo18();
        } else {
            this.assets.video18.addEventListener('canplay', startVideo18, { once: true });
        }
        
        // When video18 ends, transition to video17 (only add listener once)
        if (!this.assets.video18.hasEndedListener) {
            this.assets.video18.addEventListener('ended', () => {
                console.log('Video18 ended, transitioning to video17');
                this.showingVideo18 = false;
                this.showingVideo17 = true;
                
                // Start video17 with image9 background
                this.assets.video17.currentTime = 0;
                this.assets.video17.play();
                // Reset flag so handler can be added again in next cycle
                this.assets.video18.hasEndedListener = false;
            }, { once: true });
            this.assets.video18.hasEndedListener = true;
        }
    }
    
    startVideo19Transition() {
        console.log('Starting video19 transition...');
        
        // Pause video15 but keep showing it until video19 is ready
        this.assets.video15.pause();
        this.assets.video19.currentTime = 0;
        this.preparingVideo19 = true;  // Flag to show background while preparing
        
        // Make sure video19 is not looping
        this.assets.video19.loop = false;
        
        // Wait for video19 to be ready, then start it
        const startVideo19 = () => {
            this.preparingVideo19 = false;
            this.showingVideo19 = true;
            this.assets.video19.play();
        };
        
        if (this.assets.video19.readyState >= 2) {
            startVideo19();
        } else {
            this.assets.video19.addEventListener('canplay', startVideo19, { once: true });
        }
        
        // When video19 ends, transition to video20 (only add listener once)
        if (!this.assets.video19.hasEndedListener) {
            this.assets.video19.addEventListener('ended', () => {
                console.log('Video19 ended, transitioning to video20');
                this.showingVideo19 = false;
                this.showingVideo20 = true;
                
                // Start video20 with image10 background
                this.assets.video20.currentTime = 0;
                this.assets.video20.play();
                // Reset flag so handler can be added again in next cycle
                this.assets.video19.hasEndedListener = false;
            }, { once: true });
            this.assets.video19.hasEndedListener = true;
        }
    }
    
    startVideo21Transition() {
        console.log('Starting video21 transition - returning to start...');
        
        // Pause video20 but keep showing it until video21 is ready
        this.assets.video20.pause();
        this.assets.video21.currentTime = 0;
        this.preparingVideo21 = true;  // Flag to show background while preparing
        
        // Make sure video21 is not looping
        this.assets.video21.loop = false;
        
        // Wait for video21 to be ready, then start it
        const startVideo21 = () => {
            this.preparingVideo21 = false;
            this.showingVideo21 = true;
            this.assets.video21.play();
        };
        
        if (this.assets.video21.readyState >= 2) {
            startVideo21();
        } else {
            this.assets.video21.addEventListener('canplay', startVideo21, { once: true });
        }
        
        // When video21 ends, return to video1 (only add listener once)
        if (!this.assets.video21.hasEndedListener) {
            this.assets.video21.addEventListener('ended', () => {
                console.log('Video21 ended, returning to video1 (start)');
                
                // Reset all showing states
                this.showingVideo33 = false;
                this.showingVideo32 = false;
                this.showingVideo31 = false;
                this.showingVideo29 = false;
                this.showingVideo28 = false;
                this.showingVideo27 = false;
                this.showingVideo26 = false;
                this.showingVideo25 = false;
                this.showingVideo24 = false;
                this.showingVideo23 = false;
                this.showingVideo22 = false;
                this.showingVideo21 = false;
                this.showingVideo20 = false;
                this.showingVideo19 = false;
                this.showingVideo18 = false;
                this.showingVideo17 = false;
                this.showingVideo16 = false;
                this.showingVideo15 = false;
                this.showingVideo14 = false;
                this.showingVideo13 = false;
                this.showingVideo12 = false;
                this.showingVideo11 = false;
                this.showingVideo10 = false;
                this.showingVideo9 = false;
                this.showingVideo8 = false;
                this.showingVideo7 = false;
                this.showingVideo6 = false;
                this.showingVideo5 = false;
                this.showingVideo4 = false;
                
                // Reset all preparing states
                this.preparingVideo33 = false;
                this.preparingVideo31 = false;
                this.preparingVideo30 = false;
                this.preparingVideo28 = false;
                this.preparingVideo27 = false;
                this.preparingVideo26 = false;
                this.preparingVideo24 = false;
                this.preparingVideo22 = false;
                this.preparingVideo21 = false;
                this.preparingVideo19 = false;
                this.preparingVideo18 = false;
                this.preparingVideo16 = false;
                this.preparingVideo14 = false;
                this.preparingVideo12 = false;
                this.preparingVideo10 = false;
                this.preparingVideo8 = false;
                this.preparingVideo6 = false;
                this.preparingVideo4 = false;
                
                // Note: event listener flags are reset inside each handler automatically
                
                // Pause all videos to ensure clean state
                this.assets.video2.pause();
                this.assets.video3.pause();
                this.assets.video4.pause();
                this.assets.video5.pause();
                this.assets.video6.pause();
                this.assets.video7.pause();
                this.assets.video8.pause();
                this.assets.video9.pause();
                this.assets.video10.pause();
                this.assets.video11.pause();
                this.assets.video12.pause();
                this.assets.video13.pause();
                this.assets.video14.pause();
                this.assets.video15.pause();
                this.assets.video16.pause();
                this.assets.video17.pause();
                this.assets.video18.pause();
                this.assets.video19.pause();
                this.assets.video20.pause();
                this.assets.video22.pause();
                this.assets.video23.pause();
                this.assets.video24.pause();
                this.assets.video25.pause();
                this.assets.video26.pause();
                this.assets.video27.pause();
                this.assets.video28.pause();
                this.assets.video29.pause();
                this.assets.video31.pause();
                this.assets.video30.pause();
                this.assets.video32.pause();
                
                // Reset currentTime for all videos
                this.assets.video2.currentTime = 0;
                this.assets.video3.currentTime = 0;
                this.assets.video4.currentTime = 0;
                this.assets.video5.currentTime = 0;
                this.assets.video6.currentTime = 0;
                this.assets.video7.currentTime = 0;
                this.assets.video8.currentTime = 0;
                this.assets.video9.currentTime = 0;
                this.assets.video10.currentTime = 0;
                this.assets.video11.currentTime = 0;
                this.assets.video12.currentTime = 0;
                this.assets.video13.currentTime = 0;
                this.assets.video14.currentTime = 0;
                this.assets.video15.currentTime = 0;
                this.assets.video16.currentTime = 0;
                this.assets.video17.currentTime = 0;
                this.assets.video18.currentTime = 0;
                this.assets.video19.currentTime = 0;
                this.assets.video20.currentTime = 0;
                this.assets.video22.currentTime = 0;
                this.assets.video23.currentTime = 0;
                this.assets.video24.currentTime = 0;
                this.assets.video25.currentTime = 0;
                this.assets.video26.currentTime = 0;
                this.assets.video27.currentTime = 0;
                this.assets.video28.currentTime = 0;
                this.assets.video29.currentTime = 0;
                this.assets.video31.currentTime = 0;
                this.assets.video30.currentTime = 0;
                this.assets.video32.currentTime = 0;
                
                // Return to initial location
                this.currentLocation = 'video1';
                this.isTransitioning = false;
                
                // Start video1 from beginning
                this.assets.video1.currentTime = 0;
                this.assets.video1.play();
                
                // Reset flag so handler can be added again in next cycle (must be last)
                this.assets.video21.hasEndedListener = false;
            }, { once: true });
            this.assets.video21.hasEndedListener = true;
        }
    }
    
    startVideo22Transition() {
        console.log('Starting video22 transition...');
        
        // Pause video9 but keep showing it until video22 is ready
        this.assets.video9.pause();
        this.assets.video22.currentTime = 0;
        this.preparingVideo22 = true;  // Flag to show background while preparing
        
        // Make sure video22 is not looping
        this.assets.video22.loop = false;
        
        // Wait for video22 to be ready, then start it
        const startVideo22 = () => {
            this.preparingVideo22 = false;
            this.showingVideo22 = true;
            this.assets.video22.play();
        };
        
        if (this.assets.video22.readyState >= 2) {
            startVideo22();
        } else {
            this.assets.video22.addEventListener('canplay', startVideo22, { once: true });
        }
        
        // When video22 ends, transition to video23 (only add listener once)
        if (!this.assets.video22.hasEndedListener) {
            this.assets.video22.addEventListener('ended', () => {
                console.log('Video22 ended, transitioning to video23');
                this.showingVideo22 = false;
                this.showingVideo23 = true;
                
                // Start video23 with image11 background
                this.assets.video23.currentTime = 0;
                this.assets.video23.play();
                // Reset flag so handler can be added again in next cycle
                this.assets.video22.hasEndedListener = false;
            }, { once: true });
            this.assets.video22.hasEndedListener = true;
        }
    }
    
    startVideo24Transition() {
        console.log('Starting video24 transition...');
        
        // Pause video17 but keep showing it until video24 is ready
        this.assets.video17.pause();
        this.assets.video24.currentTime = 0;
        this.preparingVideo24 = true;  // Flag to show background while preparing
        
        // Make sure video24 is not looping
        this.assets.video24.loop = false;
        
        // Wait for video24 to be ready, then start it
        const startVideo24 = () => {
            this.preparingVideo24 = false;
            this.showingVideo24 = true;
            this.assets.video24.play();
        };
        
        if (this.assets.video24.readyState >= 2) {
            startVideo24();
        } else {
            this.assets.video24.addEventListener('canplay', startVideo24, { once: true });
        }
        
        // When video24 ends, transition to video25 (only add listener once)
        if (!this.assets.video24.hasEndedListener) {
            this.assets.video24.addEventListener('ended', () => {
                console.log('Video24 ended, transitioning to video25');
                this.showingVideo24 = false;
                this.showingVideo25 = true;
                
                // Start video25 with image12 background
                this.assets.video25.currentTime = 0;
                this.assets.video25.play();
                // Reset flag so handler can be added again in next cycle
                this.assets.video24.hasEndedListener = false;
            }, { once: true });
            this.assets.video24.hasEndedListener = true;
        }
    }
    
    startVideo26Transition() {
        console.log('Starting video26 transition - returning to start...');
        
        // Pause video25 but keep showing it until video26 is ready
        this.assets.video25.pause();
        this.assets.video26.currentTime = 0;
        this.preparingVideo26 = true;  // Flag to show background while preparing
        
        // Make sure video26 is not looping
        this.assets.video26.loop = false;
        
        // Wait for video26 to be ready, then start it
        const startVideo26 = () => {
            this.preparingVideo26 = false;
            this.showingVideo26 = true;
            this.assets.video26.play();
        };
        
        if (this.assets.video26.readyState >= 2) {
            startVideo26();
        } else {
            this.assets.video26.addEventListener('canplay', startVideo26, { once: true });
        }
        
        // When video26 ends, return to video1 (only add listener once)
        if (!this.assets.video26.hasEndedListener) {
            this.assets.video26.addEventListener('ended', () => {
                console.log('Video26 ended, returning to video1 (start)');
                
                // Reset all showing states
                this.showingVideo33 = false;
                this.showingVideo32 = false;
                this.showingVideo31 = false;
                this.showingVideo29 = false;
                this.showingVideo28 = false;
                this.showingVideo27 = false;
                this.showingVideo26 = false;
                this.showingVideo25 = false;
                this.showingVideo24 = false;
                this.showingVideo23 = false;
                this.showingVideo22 = false;
                this.showingVideo21 = false;
                this.showingVideo20 = false;
                this.showingVideo19 = false;
                this.showingVideo18 = false;
                this.showingVideo17 = false;
                this.showingVideo16 = false;
                this.showingVideo15 = false;
                this.showingVideo14 = false;
                this.showingVideo13 = false;
                this.showingVideo12 = false;
                this.showingVideo11 = false;
                this.showingVideo10 = false;
                this.showingVideo9 = false;
                this.showingVideo8 = false;
                this.showingVideo7 = false;
                this.showingVideo6 = false;
                this.showingVideo5 = false;
                this.showingVideo4 = false;
                
                // Reset all preparing states
                this.preparingVideo33 = false;
                this.preparingVideo31 = false;
                this.preparingVideo30 = false;
                this.preparingVideo28 = false;
                this.preparingVideo27 = false;
                this.preparingVideo26 = false;
                this.preparingVideo24 = false;
                this.preparingVideo22 = false;
                this.preparingVideo21 = false;
                this.preparingVideo19 = false;
                this.preparingVideo18 = false;
                this.preparingVideo16 = false;
                this.preparingVideo14 = false;
                this.preparingVideo12 = false;
                this.preparingVideo10 = false;
                this.preparingVideo8 = false;
                this.preparingVideo6 = false;
                this.preparingVideo4 = false;
                
                // Note: event listener flags are reset inside each handler automatically
                
                // Pause all videos to ensure clean state
                this.assets.video2.pause();
                this.assets.video3.pause();
                this.assets.video4.pause();
                this.assets.video5.pause();
                this.assets.video6.pause();
                this.assets.video7.pause();
                this.assets.video8.pause();
                this.assets.video9.pause();
                this.assets.video10.pause();
                this.assets.video11.pause();
                this.assets.video12.pause();
                this.assets.video13.pause();
                this.assets.video14.pause();
                this.assets.video15.pause();
                this.assets.video16.pause();
                this.assets.video17.pause();
                this.assets.video18.pause();
                this.assets.video19.pause();
                this.assets.video20.pause();
                this.assets.video21.pause();
                this.assets.video22.pause();
                this.assets.video23.pause();
                this.assets.video24.pause();
                this.assets.video25.pause();
                this.assets.video26.pause();
                this.assets.video27.pause();
                this.assets.video28.pause();
                this.assets.video29.pause();
                this.assets.video31.pause();
                this.assets.video30.pause();
                this.assets.video32.pause();
                
                // Reset currentTime for all videos
                this.assets.video2.currentTime = 0;
                this.assets.video3.currentTime = 0;
                this.assets.video4.currentTime = 0;
                this.assets.video5.currentTime = 0;
                this.assets.video6.currentTime = 0;
                this.assets.video7.currentTime = 0;
                this.assets.video8.currentTime = 0;
                this.assets.video9.currentTime = 0;
                this.assets.video10.currentTime = 0;
                this.assets.video11.currentTime = 0;
                this.assets.video12.currentTime = 0;
                this.assets.video13.currentTime = 0;
                this.assets.video14.currentTime = 0;
                this.assets.video15.currentTime = 0;
                this.assets.video16.currentTime = 0;
                this.assets.video17.currentTime = 0;
                this.assets.video18.currentTime = 0;
                this.assets.video19.currentTime = 0;
                this.assets.video20.currentTime = 0;
                this.assets.video21.currentTime = 0;
                this.assets.video22.currentTime = 0;
                this.assets.video23.currentTime = 0;
                this.assets.video24.currentTime = 0;
                this.assets.video25.currentTime = 0;
                this.assets.video26.currentTime = 0;
                this.assets.video27.currentTime = 0;
                this.assets.video28.currentTime = 0;
                this.assets.video29.currentTime = 0;
                this.assets.video31.currentTime = 0;
                this.assets.video30.currentTime = 0;
                this.assets.video32.currentTime = 0;
                
                // Return to initial location
                this.currentLocation = 'video1';
                this.isTransitioning = false;
                
                // Start video1 from beginning
                this.assets.video1.currentTime = 0;
                this.assets.video1.play();
                
                // Reset flag so handler can be added again in next cycle (must be last)
                this.assets.video26.hasEndedListener = false;
            }, { once: true });
            this.assets.video26.hasEndedListener = true;
        }
    }
    
    startVideo27Transition() {
        console.log('Starting video27 transition - returning to start...');
        
        // Pause video23 but keep showing it until video27 is ready
        this.assets.video23.pause();
        this.assets.video27.currentTime = 0;
        this.preparingVideo27 = true;  // Flag to show background while preparing
        
        // Make sure video27 is not looping
        this.assets.video27.loop = false;
        
        // Wait for video27 to be ready, then start it
        const startVideo27 = () => {
            this.preparingVideo27 = false;
            this.showingVideo27 = true;
            this.assets.video27.play();
        };
        
        if (this.assets.video27.readyState >= 2) {
            startVideo27();
        } else {
            this.assets.video27.addEventListener('canplay', startVideo27, { once: true });
        }
        
        // When video27 ends, return to video1 (only add listener once)
        if (!this.assets.video27.hasEndedListener) {
            this.assets.video27.addEventListener('ended', () => {
                console.log('Video27 ended, returning to video1 (start)');
                
                // Reset all showing states
                this.showingVideo29 = false;
                this.showingVideo28 = false;
                this.showingVideo27 = false;
                this.showingVideo26 = false;
                this.showingVideo25 = false;
                this.showingVideo24 = false;
                this.showingVideo23 = false;
                this.showingVideo22 = false;
                this.showingVideo21 = false;
                this.showingVideo20 = false;
                this.showingVideo19 = false;
                this.showingVideo18 = false;
                this.showingVideo17 = false;
                this.showingVideo16 = false;
                this.showingVideo15 = false;
                this.showingVideo14 = false;
                this.showingVideo13 = false;
                this.showingVideo12 = false;
                this.showingVideo11 = false;
                this.showingVideo10 = false;
                this.showingVideo9 = false;
                this.showingVideo8 = false;
                this.showingVideo7 = false;
                this.showingVideo6 = false;
                this.showingVideo5 = false;
                this.showingVideo4 = false;
                this.showingVideo32 = false;
                this.showingVideo31 = false;
                
                // Reset all preparing states
                this.preparingVideo33 = false;
                this.preparingVideo31 = false;
                this.preparingVideo30 = false;
                this.preparingVideo28 = false;
                this.preparingVideo27 = false;
                this.preparingVideo26 = false;
                this.preparingVideo24 = false;
                this.preparingVideo22 = false;
                this.preparingVideo21 = false;
                this.preparingVideo19 = false;
                this.preparingVideo18 = false;
                this.preparingVideo16 = false;
                this.preparingVideo14 = false;
                this.preparingVideo12 = false;
                this.preparingVideo10 = false;
                this.preparingVideo8 = false;
                this.preparingVideo6 = false;
                this.preparingVideo4 = false;
                
                // Note: event listener flags are reset inside each handler automatically
                
                // Pause all videos to ensure clean state
                this.assets.video2.pause();
                this.assets.video3.pause();
                this.assets.video4.pause();
                this.assets.video5.pause();
                this.assets.video6.pause();
                this.assets.video7.pause();
                this.assets.video8.pause();
                this.assets.video9.pause();
                this.assets.video10.pause();
                this.assets.video11.pause();
                this.assets.video12.pause();
                this.assets.video13.pause();
                this.assets.video14.pause();
                this.assets.video15.pause();
                this.assets.video16.pause();
                this.assets.video17.pause();
                this.assets.video18.pause();
                this.assets.video19.pause();
                this.assets.video20.pause();
                this.assets.video21.pause();
                this.assets.video22.pause();
                this.assets.video23.pause();
                this.assets.video24.pause();
                this.assets.video25.pause();
                this.assets.video26.pause();
                this.assets.video27.pause();
                this.assets.video28.pause();
                this.assets.video29.pause();
                this.assets.video31.pause();
                this.assets.video30.pause();
                this.assets.video32.pause();
                
                // Reset currentTime for all videos
                this.assets.video2.currentTime = 0;
                this.assets.video3.currentTime = 0;
                this.assets.video4.currentTime = 0;
                this.assets.video5.currentTime = 0;
                this.assets.video6.currentTime = 0;
                this.assets.video7.currentTime = 0;
                this.assets.video8.currentTime = 0;
                this.assets.video9.currentTime = 0;
                this.assets.video10.currentTime = 0;
                this.assets.video11.currentTime = 0;
                this.assets.video12.currentTime = 0;
                this.assets.video13.currentTime = 0;
                this.assets.video14.currentTime = 0;
                this.assets.video15.currentTime = 0;
                this.assets.video16.currentTime = 0;
                this.assets.video17.currentTime = 0;
                this.assets.video18.currentTime = 0;
                this.assets.video19.currentTime = 0;
                this.assets.video20.currentTime = 0;
                this.assets.video21.currentTime = 0;
                this.assets.video22.currentTime = 0;
                this.assets.video23.currentTime = 0;
                this.assets.video24.currentTime = 0;
                this.assets.video25.currentTime = 0;
                this.assets.video26.currentTime = 0;
                this.assets.video27.currentTime = 0;
                this.assets.video28.currentTime = 0;
                this.assets.video29.currentTime = 0;
                this.assets.video31.currentTime = 0;
                this.assets.video30.currentTime = 0;
                this.assets.video32.currentTime = 0;
                
                // Return to initial location
                this.currentLocation = 'video1';
                this.isTransitioning = false;
                
                // Start video1 from beginning
                this.assets.video1.currentTime = 0;
                this.assets.video1.play();
                
                // Reset flag so handler can be added again in next cycle (must be last)
                this.assets.video27.hasEndedListener = false;
            }, { once: true });
            this.assets.video27.hasEndedListener = true;
        }
    }
    
    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.currentLocation === 'video1' && !this.isTransitioning) {
            // Show background image image1
            this.drawImage(this.assets.image1);
            // Draw looped video video1 on top
            this.drawVideo(this.assets.video1);
        } else if (this.isTransitioning) {
            // Show transition video2 if ready
            if (this.assets.video2 && this.assets.video2.readyState >= 2) {
                this.drawVideo(this.assets.video2);
            } else {
                // While video2 not ready, show background image1
                this.drawImage(this.assets.image1);
            }
        } else if (this.currentLocation === 'video3') {
            // Priority for video35 and related states - check first
            if (this.showingVideo36) {
                // Transition video36 to start — background image15 to avoid flickering
                this.drawImage(this.assets.image15 || this.assets.image14);
                this.drawVideo(this.assets.video36);
            } else if (this.preparingVideo36) {
                // While video36 is preparing, show background image15 and frozen video35
                this.drawImage(this.assets.image15 || this.assets.image14);
                this.drawVideo(this.assets.video35);
            } else if (this.showingVideo35) {
                // video35 with background image15 (no flickering) - click starts video36
                this.drawImage(this.assets.image15 || this.assets.image14);
                this.drawVideo(this.assets.video35);
                // zones can be highlighted if desired
                this.drawInteractiveZones();
            } else if (this.showingVideo34) {
                // video34 transitions to video35 — draw with same background to avoid flickering
                this.drawImage(this.assets.image15 || this.assets.image14);
                this.drawVideo(this.assets.video34);
            } else if (this.preparingVideo34) {
                // While video34 is preparing, show background image12 and frozen video25
                this.drawImage(this.assets.image12);
                this.drawVideo(this.assets.video25);
            } else if (this.showingVideo21) {
                // Show video21 transition back to start
                this.drawVideo(this.assets.video21);
            } else if (this.preparingVideo21) {
                // Show background image10 while preparing video21
                this.drawImage(this.assets.image10);
                // Keep showing paused video20 until video21 is ready
                this.drawVideo(this.assets.video20);
            } else if (this.showingVideo20) {
                // Show video20 with image10 background
                console.log('Drawing video20 with image10 background');
                this.drawImage(this.assets.image10);
                this.drawVideo(this.assets.video20);
            } else if (this.showingVideo19) {
                // Show video19 transition with image10 background to prevent flickering
                this.drawImage(this.assets.image10);
                this.drawVideo(this.assets.video19);
            } else if (this.preparingVideo19) {
                // Show background image8 while preparing video19
                this.drawImage(this.assets.image8);
                // Keep showing paused video15 until video19 is ready
                this.drawVideo(this.assets.video15);
            } else if (this.showingVideo26) {
                // Show video26 transition back to start
                this.drawVideo(this.assets.video26);
            } else if (this.preparingVideo26) {
                // Show background image12 while preparing video26
                this.drawImage(this.assets.image12);
                // Keep showing paused video25 until video26 is ready
                this.drawVideo(this.assets.video25);
            } else if (this.showingVideo25) {
                // Show video25 with image12 background
                console.log('Drawing video25 with image12 background');
                this.drawImage(this.assets.image12);
                this.drawVideo(this.assets.video25);
                // Add visual indication of interactive zones
                this.drawInteractiveZones();
            } else if (this.showingVideo24) {
                // Show video24 transition with image12 background to prevent flickering
                this.drawImage(this.assets.image12);
                this.drawVideo(this.assets.video24);
            } else if (this.preparingVideo24) {
                // Show background image9 while preparing video24
                this.drawImage(this.assets.image9);
                // Keep showing paused video17 until video24 is ready
                this.drawVideo(this.assets.video17);
            } else if (this.showingVideo17) {
                // Show video17 with image9 background always
                console.log('Drawing video17 with image9 background');
                this.drawImage(this.assets.image9);
                this.drawVideo(this.assets.video17);
            } else if (this.showingVideo18) {
                // Show video18 transition with image9 background to prevent flickering
                this.drawImage(this.assets.image9);
                this.drawVideo(this.assets.video18);
            } else if (this.preparingVideo18) {
                // Show background image8 while preparing video18
                this.drawImage(this.assets.image8);
                // Keep showing paused video15 until video18 is ready
                this.drawVideo(this.assets.video15);
            } else if (this.showingVideo16) {
                // Show video16 transition
                this.drawVideo(this.assets.video16);
            } else if (this.preparingVideo16) {
                // Show background image7 while preparing video16
                this.drawImage(this.assets.image7);
                // Keep showing paused video13 until video16 is ready
                this.drawVideo(this.assets.video13);
            } else if (this.showingVideo30) {
                // Show video30 transition to video34
                this.drawVideo(this.assets.video30);
            } else if (this.preparingVideo30) {
                // Show background image13 while preparing video30
                this.drawImage(this.assets.image13);
                // Keep showing paused video29 until video30 is ready
                this.drawVideo(this.assets.video29);
            } else if (this.showingVideo29) {
                // Show video29 with image13 background
                console.log('Drawing video29 with image13 background');
                this.drawImage(this.assets.image13);
                this.drawVideo(this.assets.video29);
                // Add visual indication of interactive zones
                this.drawInteractiveZones();
            } else if (this.showingVideo28) {
                // Show video28 transition with image13 background to prevent flickering
                this.drawImage(this.assets.image13);
                this.drawVideo(this.assets.video28);
            } else if (this.preparingVideo28) {
                // Show background image7 while preparing video28
                this.drawImage(this.assets.image7);
                // Keep showing paused video13 until video28 is ready
                this.drawVideo(this.assets.video13);
            } else if (this.showingVideo13) {
                // Show video13 with image7 background
                this.drawImage(this.assets.image7);
                this.drawVideo(this.assets.video13);
                // Add visual indication of interactive zones
                this.drawInteractiveZones();
            } else if (this.showingVideo12) {
                // Show video12 transition
                this.drawVideo(this.assets.video12);
            } else if (this.preparingVideo12) {
                // Show background image2 while preparing video12
                this.drawImage(this.assets.image2);
                // Keep showing paused video3 until video12 is ready
                this.drawVideo(this.assets.video3);
            } else if (this.showingVideo15) {
                // Show video15 with image8 background
                console.log('Drawing video15 with image8 background');
                this.drawImage(this.assets.image8);
                this.drawVideo(this.assets.video15);
                // Add visual indication of interactive zones
                this.drawInteractiveZones();
            } else if (this.showingVideo14) {
                // Show video14 transition
                this.drawVideo(this.assets.video14);
            } else if (this.preparingVideo14) {
                // Show background image6 while preparing video14
                this.drawImage(this.assets.image6);
                // Keep showing paused video11 until video14 is ready
                this.drawVideo(this.assets.video11);
            } else if (this.showingVideo11) {
                // Show video11 with image6 background
                console.log('Drawing video11 with image6 background');
                this.drawImage(this.assets.image6);
                this.drawVideo(this.assets.video11);
            } else if (this.showingVideo10) {
                // Show video10 transition
                this.drawVideo(this.assets.video10);
            } else if (this.preparingVideo10) {
                // Show background image4 while preparing video10
                this.drawImage(this.assets.image4);
                // Keep showing paused video7 until video10 is ready
                this.drawVideo(this.assets.video7);
            } else if (this.showingVideo27) {
                // Show video27 transition back to start
                this.drawVideo(this.assets.video27);
            } else if (this.preparingVideo27) {
                // Show background image11 while preparing video27
                this.drawImage(this.assets.image11);
                // Keep showing paused video23 until video27 is ready
                this.drawVideo(this.assets.video23);
            } else if (this.showingVideo33) {
                // Show video33 transition back to start
                this.drawVideo(this.assets.video33);
            } else if (this.preparingVideo33) {
                // Show background image14 while preparing video33
                this.drawImage(this.assets.image14);
                // Keep showing paused video32 until video33 is ready
                this.drawVideo(this.assets.video32);
            } else if (this.showingVideo32) {
                // Show video32 with image14 background
                console.log('Drawing video32 with image14 background');
                this.drawImage(this.assets.image14);
                this.drawVideo(this.assets.video32);
            } else if (this.showingVideo31) {
                // Show video31 transition
                this.drawVideo(this.assets.video31);
            } else if (this.preparingVideo31) {
                // Show background image11 while preparing video31
                this.drawImage(this.assets.image11);
                // Keep showing paused video23 until video31 is ready
                this.drawVideo(this.assets.video23);
            } else if (this.showingVideo23) {
                // Show video23 with image11 background
                console.log('Drawing video23 with image11 background');
                this.drawImage(this.assets.image11);
                this.drawVideo(this.assets.video23);
                // Add visual indication of interactive zones
                this.drawInteractiveZones();
            } else if (this.showingVideo22) {
                // Show video22 transition with image11 background to prevent flickering
                this.drawImage(this.assets.image11);
                this.drawVideo(this.assets.video22);
            } else if (this.preparingVideo22) {
                // Show background image5 while preparing video22
                this.drawImage(this.assets.image5);
                // Keep showing paused video9 until video22 is ready
                this.drawVideo(this.assets.video9);
            } else if (this.showingVideo9) {
                // Show video9 with image5 background
                this.drawImage(this.assets.image5);
                this.drawVideo(this.assets.video9);
            } else if (this.showingVideo8) {
                // Show video8 transition
                this.drawVideo(this.assets.video8);
            } else if (this.preparingVideo8) {
                // Show background image4 while preparing video8
                this.drawImage(this.assets.image4);
                // Keep showing paused video7 until video8 is ready
                this.drawVideo(this.assets.video7);
            } else if (this.showingVideo7) {
                // Show video7 with image4 background
                this.drawImage(this.assets.image4);
                this.drawVideo(this.assets.video7);
                // Add visual indication of interactive zones
                this.drawInteractiveZones();
            } else if (this.showingVideo6) {
                // Show video6 transition
                this.drawVideo(this.assets.video6);
            } else if (this.preparingVideo6) {
                // Show background image3 while preparing video6
                this.drawImage(this.assets.image3);
                // Keep showing paused video5 until video6 is ready
                this.drawVideo(this.assets.video5);
            } else if (this.showingVideo5) {
                // Show video5 with image3 background
                this.drawImage(this.assets.image3);
                this.drawVideo(this.assets.video5);
            } else if (this.showingVideo4) {
                // Show video4 when it's playing
                this.drawVideo(this.assets.video4);
            } else if (this.preparingVideo4) {
                // Show background image2 while preparing video4
                this.drawImage(this.assets.image2);
                // Keep showing paused video3 until video4 is ready
                this.drawVideo(this.assets.video3);
            } else {
                // Show background image image2
                this.drawImage(this.assets.image2);
                // Draw looped video video3 on top
                this.drawVideo(this.assets.video3);
                // Add visual indication of interactive zones
                this.drawInteractiveZones();
            }
        }
    }
    
    drawVideo(video) {
        if (!video || video.readyState < 2) {
            if (video && video.src) {
                console.log(`Video ${video.src} not ready, readyState: ${video.readyState}`);
            }
            return;
        }
        
        // Calculate dimensions for full screen scaling
        const canvasAspect = this.canvas.width / this.canvas.height;
        const videoAspect = video.videoWidth / video.videoHeight;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        if (videoAspect > canvasAspect) {
            // Video is wider - scale by height
            drawHeight = this.canvas.height;
            drawWidth = drawHeight * videoAspect;
            offsetX = (this.canvas.width - drawWidth) / 2;
            offsetY = 0;
        } else {
            // Video is taller - scale by width
            drawWidth = this.canvas.width;
            drawHeight = drawWidth / videoAspect;
            offsetX = 0;
            offsetY = (this.canvas.height - drawHeight) / 2;
        }
        
        this.ctx.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);
    }
    
    drawImage(img) {
        if (!img) return;
        
        // Calculate dimensions for full screen scaling
        const canvasAspect = this.canvas.width / this.canvas.height;
        const imageAspect = img.width / img.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        if (imageAspect > canvasAspect) {
            // Image is wider - scale by height
            drawHeight = this.canvas.height;
            drawWidth = drawHeight * imageAspect;
            offsetX = (this.canvas.width - drawWidth) / 2;
            offsetY = 0;
        } else {
            // Image is taller - scale by width
            drawWidth = this.canvas.width;
            drawHeight = drawWidth / imageAspect;
            offsetX = 0;
            offsetY = (this.canvas.height - drawHeight) / 2;
        }
        
        this.ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
    
    drawInteractiveZones() {
        // Interactive zones are completely transparent
        // No visual indicators - only click logic
    }
    
    gameLoop() {
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
}

// Start game after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    new PointAndClickGame();
});
