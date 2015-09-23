// dubtrack languages

var dubtrack_lang = {
		
		global : {
			close			: 'close',
			loading			: 'loading...',
			search			: 'Search',
			edit			: 'Edit',
			terms			: 'Terms of service',
			privacy			: 'Privacy policy',
			support			: 'Support',
			loginFB			: '<span>with </span>facebook',
			loginTW			: '<span>with </span>twitter',
			login			: 'login',
			comingsoon		: 'soon',	
			edit			: 'Edit',
			publicStr		: 'public',
			privateStr		: 'private', 
			online			: "Online",   
			offline			: "Offline",
			error			: "Error",
			error_des		: "Sorry there was an error processing your request",
			refresh			: "Refresh"
		},
		
		player : {
			share_song		: 'Share this song',
			share_facebook	: 'Share on facebook',
			share_twitter	: 'Share on Twitter',
			now_playing		: 'Now Playing:',
			no_song_selected: 'No song selected',
			current_dj		: 'Current DJ:',
			no_one_is_playing: 'No one is playing',
			play			: 'PLAY',
			favorite		: 'Favorite',
			history			: 'HISTORY',
			playlists		: 'PLAYLISTS',
			joinRoom		: 'JOIN A ROOM TO START LISTENING TO MUSIC!',
			loading			: 'loading...',
			buffering		: 'buffering...',
			refresh			: 'Refresh',
			error			: 'Error loading song',
			became_dj		: ' became DJ',
			join			: 'Please login to join the party: '
		},
		
		room : {
			joining			: 'joining room',	
			searching		: 'looking for rooms',
			tune_in			: 'TUNE IN',
			tuned_in		: 'tuned in',
			search			: 'Search rooms',
			create			: 'Create room',
			users			: 'USERS',
			roomIn			: 'ROOM IN',
			survivor		: 'SURVIVOR MODE',
			queue			: 'QUEUE',
			hosted_by		: 'hosted by ',
			emptyDJ			: 'EMPTY DJ SPOT',
			spotsTaken		: 'DJ SPOTS TAKEN',
			avatar_friends  : 'friends',
			avatar_room		: 'room',
			avatar_mods		: "moderators",
			active_in		: "Active in",
			facebookShare	: "I'm currently listening to <%= song %> on Dubtrack.fm.  Join me!",
			twitterShare	: "I'm currently listening to <%= song %> on #dubtrackfm.  Join me!",
			shareTitle		: "Share DubTrack.FM"
		},
		
		roomForm : {
			formLabel		: 'DUBTRACK.FM ROOM',
			roomNameLabel	: 'Room name',	
			maxSongLabel	: 'Max. song length',
			maxSongLabelDes	: 'Max. song length in seconds',
			roomDescLabel	: 'Room Description',
			roomDesc		: 'About your room....',
			save			: 'Save'
		},
		
		notification : {
			loading			: 'Loading notifications...',
			following_you	: 'is now following you',
			loadMore		: 'load more notifications',
			//postedOn		: "Posted on <%= to.username %>'s wall", 
			postedOn		: "@<%= to.username %>" 
		},
		
		avatar : {
			followers		: 'FOLLOWERS',
			following		: 'FOLLOWING',
			view_profile	: 'view profile',
			view_playlists	: 'view playlists',
			post_to_wall_holder	: 'Whats on your mind?',
			post_to_wall	: 'Post to wall',
			loading			: 'Loading user...',
			loadingComments	: 'Loading comments...',
			deleteStr		: 'delete',
			tunes			: 'tunes',
			loadingPlaylists: 'loading playlists...',
			back			: 'back',
			offline			: 'offline',
			profileNotfound : 'Profile not found',
			profileNotfound_des : "The profile you are looking for doesn't exist",
			upload			: 'Upload Music'	
		},
		
		dubs : {
			search			: 'Search...',
			all_time		: 'All time',
			month			: 'Month',
			day				: 'Day',
			loading			: 'loading dubs...',
			dubs			: 'dubs',
			listen			: 'Listen',
			discuss			: 'Discuss',
			played_in		: 'Played in',
			loadingDetails	: 'loading details',
			loadingComments	: 'loading comments',
			nocomments		: 'no comments'	,
			comments		: 'comments',
			song_notfound	: 'Song not found',
			song_notfound_des : 'Sorry but we were unable to find the song you were looking for',
			voted			: 'voted'
		},
		
		comments : {
			report			: 'Report spam',
			reported		: 'reported',
			deleteStr		: 'delete',
			leave_comment	: 'Leave a comment',
			submit			: 'submit',
			load_more		: 'view all comments',
			login_to_post	: 'Please login to post a comment:'
		},
		
		playlist : {	
			loading_playlists : 'Loading playlists',
			your_queue		: 'My queue',
			my_tracks		: 'My tracks',
			preview			: 'Preview',
			addToQueue		: 'Add to queue',
			removePlaylist	: 'delete',
			queuePlaylist	: 'QUEUE PLAYLIST',
			deletePlaylist	: 'DELETE',
			tunes			: 'tunes',
			addToPlaylist	: 'playlist',
			instructions	: 'skin/default/images/youtube_search_window_INSTRUCTIONS.png',
			create			: 'create a new playlist',
			removePlaylistConfirm : 'Are you sure you want to remove this playlist?',
			uploading		: 'uploading...',
			uploadDone		: 'done',
			dropFiles		: 'Drop your songs here to upload. ',
			filter			: 'Filter playlist',
			upload_btn		: 'Upload music',
			confirmRemoveTrack : 'Are you sure you want to remove this song?',
			deletedByUser	: 'Deleted by user',
			history			: 'history'
		},
		
		chat	: {
			sound_on		: 'ON',
			sound_off		: 'OFF',
			sound_mention	: '@mention',
			type_message	: 'Join the conversation',
			login_message	: 'Login to join the conversation',
			loadingHistory	: 'Loading history' 
		},
		
		messages : {
			reply			: 'Reply...',
			send			: 'Send'	
		},
		
		profile : {
			follow			: 'follow',
			unfollow		: 'unfollow',
			online			: 'online',
			offline			: 'offline',
			feed			: 'Feed',
			playlists		: 'Playlists',
			musicEvents		: 'Music',
			dubtrack_form_title : 'Dubtrack User Update',
			username		: 'Username',
			choose_username : 'choose your dubtrack username',
			location		: 'Location',
			location_info	: 'Tell us where you are',
			gender			: 'Gender',
			male			: 'male',
			female			: 'female',
			other			: 'other',
			bio				: 'Bio',
			bio_info		: 'Tell us about you...',
			cancel			: 'Cancel',
			save			: 'Update profile',
			read_more		: 'read more',
			read_less		: 'read less',
			add_link		: 'Add link',
			edit			: 'Edit',
			folowers		: 'Followers',
			folowing		: 'Following',
			activeRoom		: '<%= dj_details.dt_username %> is active in <%= activeRoom.name %>. click here to JOIN the party!',
			loadmorewall 	: 'load more wall posts',
			is_taken		: 'is taken',
			is_available	: 'is available'
		},
		
		titles : {
			topdubs			: 'Top dubs',
			lobby			: 'Lobby',
			notifications	: 'Notifications'
		},
		
		errors : {
			roomLimit		: 'Sorry, you can only create up to 5 rooms'
		},
		
		menu : {
			topdubs			: 'Top Dubs',
			help			: 'Help',
			lobby			: 'Lobby'	
		},
		
		help : {
			how_to_play		: 'How to play songs?',
			how_to_play_des : 'To play a song click on the play(►) button ',
			next			: 'next',
			finish			: 'Finish',
			select_source	: 'Select your source',
			select_source_des: "Select your desired source for songs: dubtrack, youtube or soundcloud. If you'd like to add more please email us at <a href='mailto:support@dubtrack.fm'>support@dubtrack.fm</a>",
			search 			: 'Search',
			search_des		: "Type your song's name and hit enter",
			add				: 'Add song',
			add_des			: 'You can add your song to your queue or playlists by clicking on this icons, you can also listen to the song by clicking on the preview link',
			queue			: 'Queue Place',
			queue_des		: "Once your song is placed in the queue (usually after the current song), you'll see your queue # on the magenta box",
			favorites		: 'Add to favorites',
			favorites_des	: 'Add the current song to your playlist, you can create a new playlist typing your name on the textbox and clicking the plus (+) song',
			upvote			: 'Upvote/downvote',
			upvote_des		: 'use the up or down buttons to vote on the current song. The number in the middle displays the total votes ',
			lobby			: 'Lobby',
			lobby_des		: 'Find new rooms and new people. You can also create your own room, promote on facebook and twitter to get a bigger audience ',	
			top_dubs		: 'Top Dubs',
			top_dubs_des	: 'Find the highest rated songs sorted by day, month and all time ',
			profile			: 'Your profile',
			profile_des		: 'View and edit your profile, you can also upload new songs :)',
			notifications	: 'Notifications',
			notifications_des : 'View current activity of other dubtrack.fm users',
			friends			: 'Friends',
			friends_des		: 'View who is online',
			share			: 'Share dubtrack.fm',
			share_des		: "If you are enjoying dubtrack.fm share it, invite your friends over we'll make sure to welcome them",
			welcome			: 'Welcome to dubtrack.fm!',
			welcome_des		: 'Hi there, thanks for visiting dubtrack.fm. If you have any questions please click on "take a tour", you can also email us at <a href="mailto:support@dubtrack.fm">support@dubtrack.fm</a> with any further questions or bug reports. <br /><br />Happy dubbing :)',
			close			: 'Close',
			take_a_tour		: 'Take a tour',
			chat_commands	: 'Chat commands',
			skip			: 'skip current song',
			kick			: 'Kick @username from the room',
			kick_time		: 'Kick @username for # minutes from the room',
			ban				: 'Ban @username from the room',
			set_mod			: 'Set @username as moderator',
			remove_mod		: 'Revoke moderator from @username',
			set_dj_count	: 'Set allowed DJs to #. Use 0 for open-DJ',
			set_dj			: 'Set @username as DJ',
			remove_dj		: 'Remove @username as DJ',
			up_next			: "You're up next!",
			up_next_des		: "Your song will play next get ready :)<button class='btn btn-small btn-close'>dismiss</button>"
		}	
}