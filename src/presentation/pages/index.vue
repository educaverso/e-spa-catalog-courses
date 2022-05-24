<script setup lang="ts">
import Youtube from "@/presentation/components/_shared/youtube/Youtube.vue";
import AspectRatio from "../components/_shared/aspect-ratio/AspectRatio.vue";
import icons from "../components/_shared/icons";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="ev-youtube-player">
    <div class="info">
      <div class="breadcrumb">
        <RouterLink to="/">Ciência da computação </RouterLink
        ><icons name="arrow-right" />
        <RouterLink to="/">Introdução à programação</RouterLink>
      </div>
    </div>
    <div class="container">
      <div class="video">
        <AspectRatio :ratio="16 / 9">
          <Youtube ref="el" class="player" video-id="ETLmI_hS8HU"></Youtube>
        </AspectRatio>
      </div>
      <div class="course-content">
        <div class="module">
          <RouterLink to="/" class="title">
            <div class="title">
              <icons
                class="icon-checked"
                name="checkbox-marked-circle-outline"
              />
              <div class="icon-checked">Apresentação</div>
            </div>
            <div>
              <icons class="icon-down" name="chevron-down" />
            </div>
          </RouterLink>
          <div>2 aulas <icons name="circle-small" /> 1 desafio</div>
        </div>

        <div class="module">
          <RouterLink to="/" class="title">
            <div class="title">
              <icons class="icon-muted" name="checkbox-marked-circle-outline" />
              <div>Estruturas sequenciais</div>
            </div>
            <div>
              <icons class="icon-down" name="menu-down" />
            </div>
          </RouterLink>
          <div>2 aulas <icons name="circle-small" /> 1 desafio</div>
        </div>

        <div class="module">
          <RouterLink to="/" class="title">
            <div class="title">
              <icons class="icon-muted" name="checkbox-marked-circle-outline" />
              <div>Estruturas de repetição</div>
            </div>
            <div>
              <icons class="icon-down" name="menu-down" />
            </div>
          </RouterLink>
          <div>2 aulas <icons name="circle-small" /> 1 desafio</div>
        </div>

        <div class="module">
          <RouterLink to="/" class="title">
            <div class="title">
              <icons class="icon-muted" name="checkbox-marked-circle-outline" />
              <div>Vetores</div>
            </div>
            <div>
              <icons class="icon-down" name="menu-down" />
            </div>
          </RouterLink>
          <div>2 aulas <icons name="circle-small" /> 1 desafio</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ev-youtube-player {
  .info {
    .breadcrumb {
      color: var(--theme-dark-label);
    }
  }
  .container {
    display: flex;

    .course-content {
      width: 30%;
      margin: 0 20px;

      .module {
        margin-bottom: 20px;
        background-color: var(--theme-dark-panel);
        border-radius: 1rem;
        padding: 10px 20px;

        .title {
          line-height: 1.75;
          white-space: normal;
          font-size: 1rem;
          font-family: "Source Sans Pro", sans-serif;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          color: var(--theme-dark-primary);

          .icon-down {
            color: var(--theme-dark-foreground);
          }

          .icon-checked {
            color: var(--theme-dark-success);
          }

          .icon-muted {
            color: var(--color-muted);
          }
        }
      }
    }

    .video {
      width: 70%;
      align-items: flex-start;
    }
  }
}
</style>
