<script setup lang="ts">
import Youtube from "@/presentation/components/commons/youtube/Youtube.vue";
import AspectRatio from "../components/commons/aspect-ratio/AspectRatio.vue";
import icons from "../components/commons/icons";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="ev-youtube-player">
    <div class="info">
      <div class="breadcrumb">
        Ciência da computação <icons name="arrow-right" /> Introdução à
        Programação
      </div>
    </div>
    <div class="container">
      <div class="video">
        <AspectRatio :ratio="16 / 9">
          <Youtube ref="el" class="player" video-id="WObC_2e0kZk"></Youtube>
        </AspectRatio>
      </div>
      <div class="course-content">
        <div class="module">
          <RouterLink to="/" class="title">
            <div class="icon-checked">Apresentação</div>
            <icons class="icon-checked" name="checkbox-marked-circle-outline" />
          </RouterLink>
          <div>2 aulas <icons name="circle-small" /> 1 desafio</div>
        </div>

        <div class="module">
          <RouterLink to="/" class="title">
            <div>Estruturas sequenciais</div>

            <icons class="icon-muted" name="checkbox-marked-circle-outline" />
          </RouterLink>
          <div>8 aulas <icons name="circle-small" /> 2 desafios</div>
        </div>

        <div class="module">
          <RouterLink to="/" class="title">
            <div>Estruturas de repetição</div>
            <icons class="icon-muted" name="checkbox-marked-circle-outline" />
          </RouterLink>
          <div>5 aulas <icons name="circle-small" /> 2 desafios</div>
        </div>

        <div class="module">
          <RouterLink to="/" class="title">
            <div>Vetores</div>
            <icons class="icon-muted" name="checkbox-marked-circle-outline" />
          </RouterLink>
          <div>3 aulas <icons name="circle-small" /> 1 desafio</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ev-youtube-player {
  .info {
    padding: 10px;

    .breadcrumb {
      color: #999;
    }
  }
  .container {
    display: flex;

    .course-content {
      width: 30%;
      margin: 0 20px;

      .module {
        margin-bottom: 20px;
        background-color: #1f1f1f;
        border-radius: 1em;
        padding: 10px 20px;

        .title {
          line-height: 1.75;
          white-space: normal;
          font-size: 1rem;
          font-family: "Source Sans Pro", sans-serif;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--color-primary);

          .icon-checked {
            color: var(--color-success);
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
