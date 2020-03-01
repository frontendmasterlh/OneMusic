import { playMode } from 'common/config.js'

const state = {
  singer: {},
  playing: false, // 播放状态
  fullScreen: false, // 播放器的展开 和 隐藏
  playlist: [], // 播放列表
  sequenceList: [], // 顺序列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 播放当前歌曲的索引
  currentUrlId: '' // 当前播放歌曲map3的url地址 的id
}

export default state