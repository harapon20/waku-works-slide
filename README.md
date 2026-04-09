# 小倉大学病院様 Webサイトリニューアル ご提案資料

コンペ提案用スライド（HTML/CSS）

## セットアップ

スライドは `fetch()` で動的に読み込むため、**ローカルサーバーが必要**です（`file://` ではCORSエラーになります）。

```bash
# Python の場合
python3 -m http.server 8080

# VS Code の場合
# Live Server 拡張機能で index.html を開く
```

`http://localhost:8080` にアクセスして確認してください。

## 操作方法

- **矢印キー**（←→ or ↑↓）でスライド移動
- 画面下部の **ナビゲーションバー** でも移動可能
- スクロールでも閲覧可

## ファイル構成

```
/
├── index.html        ... CSS + スライドローダー（本体）
├── style.css         ... スタイル（CSS変数でデザインシステム管理）
├── script.js         ... スライドナビゲーション（initSlides()）
├── ロゴ.png          ... waku & works ロゴ
├── README.md         ... このファイル
└── slides/
    ├── slide-01.html ... 表紙
    ├── slide-02.html ... 目次
    ├── ...
    └── slide-31.html ... クロージング
```

### 仕組み

- 各スライドは `slides/slide-XX.html` に `<section>` タグのみで格納
- `index.html` 内のローダースクリプトが `fetch()` で全31ファイルを並列読み込み
- 読み込み完了後に `initSlides()`（script.js）を呼び出してナビゲーションを初期化
- CSSは `index.html` の `<style>` タグ内に集約

### 編集方法

- **スライド内容の編集**: `slides/slide-XX.html` を直接編集（担当者ごとに分担可能）
- **スタイルの変更**: `index.html` 内の `<style>` タグを編集
- **スライドの順序変更・追加・削除**: `index.html` 内の `slideFiles` 配列を編集

## テキスト差し替え箇所

以下の箇所は仮テキストです。本番前に差し替えてください。

| スライド | 箇所 | 備考 |
|---------|------|------|
| S01 (表紙) | 日付 | `2026.04` を実際の日付に |
| S17 (FVデザイン) | モックアップエリア | デザインカンプ画像に差し替え |
| S27 (保守・運用) | 各項目の詳細 | 実際のサービス内容に |
| S28 (費用) | 金額欄 `¥---,---` | 見積もり確定後に |
| S29 (スケジュール) | 期間 | 実際のスケジュールに |
| S30 (チーム体制) | `担当者名` | 実名に差し替え |

## スライド構成（全31枚）

| # | タイトル | タイプ |
|---|---------|--------|
| 01 | 表紙 | cover |
| 02 | 目次 | toc |
| 03 | はじめに | statement |
| 04 | 章扉：コンセプト | chapter |
| 05 | コンセプト | concept |
| 06 | なぜこのコンセプトなのか | content |
| 07 | ターゲット設計 | content |
| 08 | 章扉：リニューアルの価値 | chapter |
| 09 | 6つの価値（全体図） | diagram |
| 10 | 患者さまへの直接的な価値 | cards |
| 11 | 組織・人の価値 | cards |
| 12 | 経営基盤の強化 | cards |
| 13 | 章扉：ブランディング | chapter |
| 14 | ブランディングの方向性 | content |
| 15 | 章扉：サイト設計 | chapter |
| 16 | サイト構成 | diagram |
| 17 | ファーストビューデザイン | content |
| 18 | トップページ設計 | content |
| 19 | モバイル＆アクセシビリティ | content |
| 20 | 章扉：各ページの設計 | chapter |
| 21 | 患者向けページ | solution |
| 22 | 地域連携ページ | solution |
| 23 | 採用ページ | solution |
| 24 | 診療科ページ＆CMS | solution |
| 25 | 50周年特設ページ | content |
| 26 | 章扉：実現に向けて | chapter |
| 27 | 保守・運用 | content |
| 28 | 費用 | content |
| 29 | スケジュール | content |
| 30 | チーム体制 | content |
| 31 | クロージング | closing |

## Figma化前の確認事項

1. **フォント**: Noto Sans JP が Google Fonts から読み込まれます。Figma側にも同フォントをインストールしてください
2. **擬似要素**: `::before` は箇条書きのドット/ラインのみ使用。Figmaでは手動で再現が必要です
3. **サイズ**: スライドは 1920×1080px で設計されています
4. **CSS変数**: Figma側ではカラースタイル・テキストスタイルとして再定義してください
5. **HTML to Figma プラグイン**: 1スライドずつ選択してインポートすると構造が保たれやすいです

## Canvaに持ち込む前の確認事項

1. **最小フォントサイズ**: 14px（キャプション）。Canva上での視認性を確認してください
2. **グラデーション**: Canvaでは単色に変換される場合があります。必要に応じてCanva側で再設定
3. **装飾円**: Figma経由で画像化してからCanvaに配置するのが確実です
4. **テーブル（費用スライド）**: Canvaのテーブル機能で再構築した方が編集しやすい場合があります
5. **余白**: Canvaのガイドグリッドを活用して、元の余白バランスを維持してください

## デザインシステム

### カラーパレット

- Primary: `#10B981`（エメラルドグリーン）
- Accent: `#A7F3D0`（アクセントバー）/ Light: `#D1FAE5`
- Sky: `#7DD3FC` / Light: `#BAE6FD`
- Text Emphasis: `#0F172A` / Primary: `#1E293B` / Secondary: `#475569` / Muted: `#64748B`
- Background: `#F8FAFC`（Slate-50）
- Border: `#E2E8F0`（Slate-200）/ `#CBD5E1`（Slate-300）

### タイポグラフィ

- Cover Title: 60px / Bold
- Cover Subtitle: 48px / Medium
- Chapter Title: 52px / Bold
- Slide Title: 40px / Bold（`#10B981`）
- Subheading: 24px / Medium
- Body: 20px / Regular
- Small: 17px / Regular
- Caption/Label: 14px / Bold
