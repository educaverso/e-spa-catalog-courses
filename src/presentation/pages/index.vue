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
            <div class="title">
              <icons
                class="icon-checked"
                name="checkbox-marked-circle-outline"
              />
              <div class="icon-checked">Apresentação</div>
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
        background-color: var(--color-background-secondary);
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
          color: var(--color-primary);

          .icon-down {
            color: var(--color-foreground);
          }

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
