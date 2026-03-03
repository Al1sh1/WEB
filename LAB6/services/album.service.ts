import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

export const ALBUMS: Album[] = [
  { id: 1, userId: 1, title: 'The Weeknd' },
  { id: 2, userId: 1, title: 'Billie Eilish' },
  { id: 3, userId: 1, title: 'Taylor Swift' },
  { id: 4, userId: 1, title: 'Drake' },
  { id: 5, userId: 1, title: 'Bad Bunny' },
  { id: 6, userId: 1, title: 'Kendrick Lamar' },
  { id: 7, userId: 1, title: 'Rihanna' },
  { id: 8, userId: 1, title: 'Eminem' },
  { id: 9, userId: 1, title: 'Ariana Grande' },
  { id: 10, userId: 1, title: 'Ed Sheeran' },
  { id: 11, userId: 2, title: 'Travis Scott' },
  { id: 12, userId: 2, title: 'Kanye West' },
  { id: 13, userId: 2, title: 'Post Malone' },
  { id: 14, userId: 2, title: 'Dua Lipa' },
  { id: 15, userId: 2, title: 'Justin Bieber' },
  { id: 16, userId: 2, title: 'SZA' },
  { id: 17, userId: 2, title: 'Doja Cat' },
  { id: 18, userId: 2, title: 'Harry Styles' },
  { id: 19, userId: 2, title: 'BTS' },
  { id: 20, userId: 2, title: 'BLACKPINK' },
  { id: 21, userId: 3, title: 'Lady Gaga' },
  { id: 22, userId: 3, title: 'Bruno Mars' },
  { id: 23, userId: 3, title: 'Beyoncé' },
  { id: 24, userId: 3, title: 'Coldplay' },
  { id: 25, userId: 3, title: 'The Neighbourhood' },
  { id: 26, userId: 3, title: 'Imagine Dragons' },
  { id: 27, userId: 3, title: 'Shawn Mendes' },
  { id: 28, userId: 3, title: 'Lana Del Rey' },
  { id: 29, userId: 3, title: 'Adele' },
  { id: 30, userId: 3, title: 'Olivia Rodrigo' },
];

interface ArtistData {
  photo: string;
  songs: string[];
}

const ARTIST_DATA: ArtistData[] = [
  // 1 The Weeknd
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/The_Weeknd_-_Openair_Frauenfeld_2023_%28cropped%29.jpg/450px-The_Weeknd_-_Openair_Frauenfeld_2023_%28cropped%29.jpg',
    songs: ['Blinding Lights', 'Starboy', 'Save Your Tears', 'Can\'t Feel My Face', 'Die For You']
  },
  // 2 Billie Eilish
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Billie_Eilish_at_the_2024_Met_Gala_%28cropped%29.jpg/450px-Billie_Eilish_at_the_2024_Met_Gala_%28cropped%29.jpg',
    songs: ['bad guy', 'Happier Than Ever', 'lovely', 'Therefore I Am', 'Ocean Eyes']
  },
  // 3 Taylor Swift
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png/450px-191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png',
    songs: ['Anti-Hero', 'Shake It Off', 'Blank Space', 'Cruel Summer', 'Love Story']
  },
  // 4 Drake
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_июль_2016.jpg/450px-Drake_июль_2016.jpg',
    songs: ['God\'s Plan', 'Hotline Bling', 'One Dance', 'In My Feelings', 'Started From the Bottom']
  },
  // 5 Bad Bunny
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Bad_Bunny_Yankee_Stadium_2022.jpg/450px-Bad_Bunny_Yankee_Stadium_2022.jpg',
    songs: ['Me Porto Bonito', 'TITÍ ME PREGUNTÓ', 'Dakiti', 'MÍA', 'Yonaguni']
  },
  // 6 Kendrick Lamar
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kendrick_Lamar_2018.jpg/450px-Kendrick_Lamar_2018.jpg',
    songs: ['HUMBLE.', 'Not Like Us', 'DNA.', 'Money Trees', 'Swimming Pools (Drank)']
  },
  // 7 Rihanna
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_-_The_Super_Bowl_Halftime_Show_%28cropped%29.jpg/450px-Rihanna_-_The_Super_Bowl_Halftime_Show_%28cropped%29.jpg',
    songs: ['Umbrella', 'Diamonds', 'We Found Love', 'Stay', 'Love On The Brain']
  },
  // 8 Eminem
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%28cropped%29.jpg/450px-Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%28cropped%29.jpg',
    songs: ['Lose Yourself', 'Rap God', 'Without Me', 'Slim Shady', 'The Real Slim Shady']
  },
  // 9 Ariana Grande
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ariana_Grande_%28cropped%29.jpg/450px-Ariana_Grande_%28cropped%29.jpg',
    songs: ['7 rings', 'thank u, next', 'positions', 'problem', 'God is a woman']
  },
  // 10 Ed Sheeran
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/450px-Ed_Sheeran-6886_%28cropped%29.jpg',
    songs: ['Shape of You', 'Perfect', 'Thinking Out Loud', 'Photograph', 'Bad Habits']
  },
  // 11 Travis Scott
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Travis_scott_2016_crop.jpg/450px-Travis_scott_2016_crop.jpg',
    songs: ['SICKO MODE', 'Goosebumps', 'Antidote', 'Highest In The Room', 'FE!N']
  },
  // 12 Kanye West
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kanye_West_at_the_2009_Tribeca_Film_Festival.jpg/450px-Kanye_West_at_the_2009_Tribeca_Film_Festival.jpg',
    songs: ['Stronger', 'Gold Digger', 'Heartless', 'All Falls Down', 'Runaway']
  },
  // 13 Post Malone
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Post_Malone_2019_by_Glenn_Francis_%28cropped%29.jpg/450px-Post_Malone_2019_by_Glenn_Francis_%28cropped%29.jpg',
    songs: ['Circles', 'Sunflower', 'Rockstar', 'Congratulations', 'White Iverson']
  },
  // 14 Dua Lipa
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/190910-dua-lipa-mn-1025_fa4e2e1e96dfa7fd265fa2c1b2c268e0.jpg/450px-190910-dua-lipa-mn-1025_fa4e2e1e96dfa7fd265fa2c1b2c268e0.jpg',
    songs: ['Levitating', 'Don\'t Start Now', 'Physical', 'New Rules', 'One Kiss']
  },
  // 15 Justin Bieber
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Justin_Bieber_in_2015.jpg/450px-Justin_Bieber_in_2015.jpg',
    songs: ['Baby', 'Sorry', 'Love Yourself', 'Peaches', 'Stay']
  },
  // 16 SZA
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/SZA_at_2018_MTV_Video_Music_Awards_%28cropped%29.jpg/450px-SZA_at_2018_MTV_Video_Music_Awards_%28cropped%29.jpg',
    songs: ['Kill Bill', 'Snooze', 'Good Days', 'All the Stars', 'Broken Clocks']
  },
  // 17 Doja Cat
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Doja_Cat_2022_%28cropped%29.jpg/450px-Doja_Cat_2022_%28cropped%29.jpg',
    songs: ['Say So', 'Kiss Me More', 'Woman', 'Need to Know', 'Streets']
  },
  // 18 Harry Styles
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Harry_Styles_at_2021_Brit_Awards_%28cropped%29.jpg/450px-Harry_Styles_at_2021_Brit_Awards_%28cropped%29.jpg',
    songs: ['As It Was', 'Watermelon Sugar', 'Adore You', 'Late Night Talking', 'Golden']
  },
  // 19 BTS
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/BTS_at_the_2019_MelOn_Music_Awards_%28cropped%29.jpg/450px-BTS_at_the_2019_MelOn_Music_Awards_%28cropped%29.jpg',
    songs: ['Dynamite', 'Butter', 'Boy With Luv', 'DNA', 'Fake Love']
  },
  // 20 BLACKPINK
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Blackpink_at_2019_MTV_VMAs_%28cropped%29.jpg/450px-Blackpink_at_2019_MTV_VMAs_%28cropped%29.jpg',
    songs: ['DDU-DU DDU-DU', 'Kill This Love', 'Pink Venom', 'Lovesick Girls', 'How You Like That']
  },
  // 21 Lady Gaga
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Lady_Gaga_at_the_2019_Met_Gala_%28cropped%29.jpg/450px-Lady_Gaga_at_the_2019_Met_Gala_%28cropped%29.jpg',
    songs: ['Bad Romance', 'Shallow', 'Poker Face', 'Just Dance', 'Born This Way']
  },
  // 22 Bruno Mars
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bruno_Mars_%28cropped%29.jpg/450px-Bruno_Mars_%28cropped%29.jpg',
    songs: ['Uptown Funk', 'Just The Way You Are', 'Grenade', 'That\'s What I Like', '24K Magic']
  },
  // 23 Beyoncé
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beyonc%C3%A9_at_The_Lion_King_European_Premiere_July_2019_%28cropped%29.jpg/450px-Beyonc%C3%A9_at_The_Lion_King_European_Premiere_July_2019_%28cropped%29.jpg',
    songs: ['Halo', 'Crazy In Love', 'Single Ladies', 'Irreplaceable', 'Lemonade']
  },
  // 24 Coldplay
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coldplay_-_Music_of_the_Spheres_World_Tour_%28May_2022%29_%28cropped%29.jpg/450px-Coldplay_-_Music_of_the_Spheres_World_Tour_%28May_2022%29_%28cropped%29.jpg',
    songs: ['The Scientist', 'Yellow', 'Clocks', 'Fix You', 'A Sky Full of Stars']
  },
  // 25 The Neighbourhood
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Neighbourhoodband.jpg/450px-Neighbourhoodband.jpg',
    songs: ['Sweater Weather', 'Afraid', 'R.I.P. 2 My Youth', 'Daddy Issues', 'A Little Death']
  },
  // 26 Imagine Dragons
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Imagine_Dragons_at_New_Year%27s_Eve_2012_%28cropped%29.jpg/450px-Imagine_Dragons_at_New_Year%27s_Eve_2012_%28cropped%29.jpg',
    songs: ['Believer', 'Thunder', 'Enemy', 'Radioactive', 'Demons']
  },
  // 27 Shawn Mendes
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shawn_Mendes_2018_%28cropped%29.jpg/450px-Shawn_Mendes_2018_%28cropped%29.jpg',
    songs: ['Stitches', 'There\'s Nothing Holdin\' Me Back', 'In My Blood', 'Mercy', 'Treat You Better']
  },
  // 28 Lana Del Rey
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Lana_Del_Rey_-_Lollapalooza_Chile_2018_%28cropped%29.jpg/450px-Lana_Del_Rey_-_Lollapalooza_Chile_2018_%28cropped%29.jpg',
    songs: ['Video Games', 'Summertime Sadness', 'Young and Beautiful', 'Born to Die', 'Blue Jeans']
  },
  // 29 Adele
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Adele_2016.jpg/450px-Adele_2016.jpg',
    songs: ['Someone Like You', 'Hello', 'Rolling in the Deep', 'Set Fire to the Rain', 'Easy On Me']
  },
  // 30 Olivia Rodrigo
  {
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Olivia_Rodrigo_at_the_2021_SVMAs_%28cropped%29.jpg/450px-Olivia_Rodrigo_at_the_2021_SVMAs_%28cropped%29.jpg',
    songs: ['drivers license', 'good 4 u', 'deja vu', 'brutal', 'traitor']
  },
];

// Cache
const photoCache = new Map<number, Photo[]>();

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

@Injectable({ providedIn: 'root' })
export class AlbumService {

  private albums: Album[] = [...ALBUMS];
  private spotifyToken: string | null = null;
  private tokenExpiration: number = 0;

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return of([...this.albums]);
  }

  getAlbum(id: number): Observable<Album> {
    const album = this.albums.find(a => a.id === id);
    return of(album ? { ...album } : { id, userId: 1, title: 'Unknown Artist' });
  }

  getAlbumPhotos(albumId: number): Observable<Photo[]> {
    if (photoCache.has(albumId)) {
      return of(photoCache.get(albumId)!);
    }
    const result = this.buildTracksFromLocal(albumId);
    photoCache.set(albumId, result);
    return of(result);
  }

  private buildTracksFromLocal(albumId: number): Photo[] {
    const data = ARTIST_DATA[albumId - 1];
    if (!data) return [];

    const artist = ALBUMS[albumId - 1]?.title ?? 'Artist';

    // First entry is the artist photo card, then one per song
    const entries: Photo[] = [];

    // Artist header photo (used as the first "card")
    entries.push({
      id: (albumId - 1) * 50 + 0,
      albumId,
      title: artist,
      url: data.photo,
      thumbnailUrl: data.photo,
    });

    data.songs.slice(0, 5).forEach((songName, i) => {
      entries.push({
        id: (albumId - 1) * 50 + i + 1,
        albumId,
        title: songName,
        url: data.photo,
        thumbnailUrl: data.photo,
      });
    });

    return entries;
  }

  updateAlbum(album: Album): Observable<Album> {
    const index = this.albums.findIndex(a => a.id === album.id);
    if (index !== -1) this.albums[index] = { ...album };
    return of({ ...album });
  }

  deleteAlbum(id: number): Observable<void> {
    this.albums = this.albums.filter(a => a.id !== id);
    photoCache.delete(id);
    return of(void 0);
  }
}